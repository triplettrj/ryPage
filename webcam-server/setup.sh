#!/usr/bin/env bash
# setup.sh — one-time setup for the home webcam server
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG="$SCRIPT_DIR/config.json"
CERT="$SCRIPT_DIR/cert.pem"
KEY="$SCRIPT_DIR/key.pem"
PLIST_NAME="com.home.webcam-server"
PLIST_DST="$HOME/Library/LaunchAgents/$PLIST_NAME.plist"

echo ""
echo "=== Home Webcam Server Setup ==="
echo ""

# ── 1. Python check ────────────────────────────────────────────────────────
if ! command -v python3 &>/dev/null; then
  echo "ERROR: python3 not found. Install it from https://python.org or via Homebrew."
  exit 1
fi
PYTHON=$(command -v python3)
echo "[1/5] Using Python: $PYTHON ($($PYTHON --version))"

# ── 2. Install pip dependencies ────────────────────────────────────────────
echo "[2/5] Installing Python dependencies..."
$PYTHON -m pip install --quiet --upgrade pip
$PYTHON -m pip install --quiet opencv-python flask pyopenssl bcrypt

echo "      Dependencies installed."

# ── 3. Generate self-signed TLS certificate ────────────────────────────────
echo "[3/5] Generating self-signed SSL certificate (10-year validity)..."
openssl req -x509 -newkey rsa:2048 -nodes \
  -keyout "$KEY" \
  -out "$CERT" \
  -days 3650 \
  -subj "/CN=home-webcam" \
  -addext "subjectAltName=IP:127.0.0.1" \
  2>/dev/null
echo "      cert.pem and key.pem written."

# ── 4. Set password & write config ────────────────────────────────────────
echo "[4/5] Set your login password."
while true; do
  read -rsp "  Enter password: " PW1; echo
  read -rsp "  Confirm password: " PW2; echo
  if [[ "$PW1" == "$PW2" ]]; then
    break
  fi
  echo "  Passwords do not match — try again."
done

PW_HASH=$($PYTHON -c "
import bcrypt, sys
pw = sys.argv[1].encode()
print(bcrypt.hashpw(pw, bcrypt.gensalt(rounds=12)).decode())
" "$PW1")

SESSION_SECRET=$(openssl rand -hex 32)
PORT=${WEBCAM_PORT:-8443}

cat > "$CONFIG" <<JSON
{
  "password_hash": "$PW_HASH",
  "session_secret": "$SESSION_SECRET",
  "session_duration_hours": 24,
  "port": $PORT
}
JSON
chmod 600 "$CONFIG"
echo "      config.json written."

# ── 5. Install LaunchAgent ─────────────────────────────────────────────────
echo "[5/5] Installing macOS LaunchAgent..."
mkdir -p "$HOME/Library/LaunchAgents"
mkdir -p "$HOME/Library/Logs"

cat > "$PLIST_DST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>$PLIST_NAME</string>

  <key>ProgramArguments</key>
  <array>
    <string>$PYTHON</string>
    <string>$SCRIPT_DIR/server.py</string>
  </array>

  <key>WorkingDirectory</key>
  <string>$SCRIPT_DIR</string>

  <key>RunAtLoad</key>
  <true/>

  <key>KeepAlive</key>
  <true/>

  <key>StandardOutPath</key>
  <string>$HOME/Library/Logs/webcam-server.log</string>

  <key>StandardErrorPath</key>
  <string>$HOME/Library/Logs/webcam-server.log</string>

  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/usr/local/bin:/usr/bin:/bin:/opt/homebrew/bin</string>
  </dict>
</dict>
</plist>
PLIST

# Load it now (unload first in case it was already loaded)
launchctl unload "$PLIST_DST" 2>/dev/null || true
launchctl load -w "$PLIST_DST"

echo ""
echo "=== Setup complete! ==="
echo ""
# Detect the primary local IP
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "<your-mac-ip>")
echo "  Local access:     https://$LOCAL_IP:$PORT"
echo "  Tailscale access: https://<tailscale-ip>:$PORT"
echo ""
echo "  Your browser will warn about the self-signed cert."
echo "  On iPhone: tap 'Show Details' → 'visit this website' to proceed."
echo ""
echo "  Log file: ~/Library/Logs/webcam-server.log"
echo "  To stop:  launchctl unload ~/Library/LaunchAgents/$PLIST_NAME.plist"
echo "  To start: launchctl load -w ~/Library/LaunchAgents/$PLIST_NAME.plist"
echo ""
