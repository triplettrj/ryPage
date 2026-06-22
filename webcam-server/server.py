#!/usr/bin/env python3
import os
import time
import logging
import secrets
import hashlib
from datetime import datetime, timedelta
from pathlib import Path
from functools import wraps

import cv2
import bcrypt
from flask import Flask, Response, request, redirect, url_for, make_response, render_template_string
import json

# ── Logging ──────────────────────────────────────────────────────────────────
LOG_DIR = Path.home() / "Library" / "Logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)
logging.basicConfig(
    filename=str(LOG_DIR / "webcam-server.log"),
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
)
logger = logging.getLogger(__name__)

# ── Config ────────────────────────────────────────────────────────────────────
CONFIG_PATH = Path(__file__).parent / "config.json"

def load_config():
    with open(CONFIG_PATH) as f:
        return json.load(f)

config = load_config()
PASSWORD_HASH: bytes = config["password_hash"].encode()
SESSION_SECRET: str = config["session_secret"]
SESSION_DURATION_HOURS: int = config.get("session_duration_hours", 24)
PORT: int = config.get("port", 8443)
CERT_FILE = Path(__file__).parent / "cert.pem"
KEY_FILE  = Path(__file__).parent / "key.pem"

# ── Session store (in-memory) ─────────────────────────────────────────────────
# token -> expiry datetime
sessions: dict[str, datetime] = {}

def create_session() -> str:
    token = secrets.token_urlsafe(32)
    sessions[token] = datetime.utcnow() + timedelta(hours=SESSION_DURATION_HOURS)
    return token

def is_valid_session(token: str | None) -> bool:
    if not token:
        return False
    expiry = sessions.get(token)
    if expiry is None:
        return False
    if datetime.utcnow() > expiry:
        sessions.pop(token, None)
        return False
    return True

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.cookies.get("session")
        if not is_valid_session(token):
            return redirect(url_for("login"))
        return f(*args, **kwargs)
    return decorated

# ── Flask app ─────────────────────────────────────────────────────────────────
app = Flask(__name__)

LOGIN_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Home Camera — Login</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a0a0a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .card {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    width: min(360px, calc(100vw - 2rem));
  }
  h1 { color: #fff; font-size: 1.4rem; margin-bottom: 1.5rem; text-align: center; }
  label { display: block; color: #aaa; font-size: 0.85rem; margin-bottom: 0.4rem; }
  input[type=password] {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid #333;
    background: #111;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1.2rem;
    outline: none;
  }
  input[type=password]:focus { border-color: #555; }
  button {
    width: 100%;
    padding: 0.8rem;
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
  }
  button:active { background: #1d4ed8; }
  .error { color: #f87171; font-size: 0.85rem; margin-bottom: 1rem; text-align: center; }
</style>
</head>
<body>
<div class="card">
  <h1>&#128247; Home Camera</h1>
  {% if error %}<p class="error">{{ error }}</p>{% endif %}
  <form method="post">
    <label for="pw">Password</label>
    <input type="password" id="pw" name="password" autofocus autocomplete="current-password">
    <button type="submit">Sign in</button>
  </form>
</div>
</body>
</html>"""

VIEWER_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>Home Camera</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 100%; height: 100dvh;
    background: #000;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img#feed {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  #overlay {
    position: fixed;
    top: env(safe-area-inset-top, 12px);
    right: env(safe-area-inset-right, 12px);
    display: flex;
    gap: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s;
  }
  body:hover #overlay, body.show-overlay #overlay { opacity: 1; }
  #overlay button {
    background: rgba(0,0,0,0.6);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    border-radius: 8px;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    cursor: pointer;
    backdrop-filter: blur(4px);
  }
  #status {
    position: fixed;
    bottom: env(safe-area-inset-bottom, 12px);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.6);
    color: #aaa;
    font-size: 0.75rem;
    font-family: -apple-system, sans-serif;
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    backdrop-filter: blur(4px);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  body.show-overlay #status { opacity: 1; }
</style>
</head>
<body>
<img id="feed" src="/stream" alt="webcam feed">
<div id="overlay">
  <button onclick="toggleFullscreen()">&#x26F6; Fullscreen</button>
  <button onclick="location.href='/logout'">Sign out</button>
</div>
<div id="status" id="status">Live</div>
<script>
  let hideTimer;
  function showOverlay() {
    document.body.classList.add('show-overlay');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => document.body.classList.remove('show-overlay'), 3000);
  }
  document.addEventListener('touchstart', showOverlay);
  document.addEventListener('mousemove', showOverlay);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  // Reconnect feed if it stalls
  const img = document.getElementById('feed');
  img.addEventListener('error', () => {
    setTimeout(() => { img.src = '/stream?' + Date.now(); }, 2000);
  });
</script>
</body>
</html>"""

@app.route("/", methods=["GET"])
@require_auth
def index():
    return viewer()

@app.route("/view", methods=["GET"])
@require_auth
def viewer():
    return render_template_string(VIEWER_HTML)

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        pw = request.form.get("password", "").encode()
        if bcrypt.checkpw(pw, PASSWORD_HASH):
            token = create_session()
            resp = make_response(redirect(url_for("index")))
            resp.set_cookie(
                "session", token,
                max_age=SESSION_DURATION_HOURS * 3600,
                httponly=True,
                secure=True,
                samesite="Strict",
            )
            logger.info("Successful login from %s", request.remote_addr)
            return resp
        logger.warning("Failed login attempt from %s", request.remote_addr)
        return render_template_string(LOGIN_HTML, error="Incorrect password"), 401
    return render_template_string(LOGIN_HTML, error=None)

@app.route("/logout")
def logout():
    token = request.cookies.get("session")
    sessions.pop(token, None)
    resp = make_response(redirect(url_for("login")))
    resp.delete_cookie("session")
    return resp

def gen_frames():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        logger.error("Cannot open webcam (index 0)")
        return
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    logger.info("Webcam opened — streaming started")
    try:
        while True:
            ok, frame = cap.read()
            if not ok:
                logger.warning("Frame capture failed — retrying")
                time.sleep(0.1)
                continue
            _, buf = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
            yield (
                b"--frame\r\n"
                b"Content-Type: image/jpeg\r\n\r\n"
                + buf.tobytes()
                + b"\r\n"
            )
    finally:
        cap.release()
        logger.info("Webcam released")

@app.route("/stream")
@require_auth
def stream():
    return Response(
        gen_frames(),
        mimetype="multipart/x-mixed-replace; boundary=frame",
    )

# ── Entry point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    import ssl
    ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ctx.load_cert_chain(str(CERT_FILE), str(KEY_FILE))
    logger.info("Starting webcam server on port %d", PORT)
    app.run(host="0.0.0.0", port=PORT, ssl_context=ctx, threaded=True)
