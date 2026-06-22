# Home Webcam Server

Stream your Mac's webcam securely to any device on your home network or via Tailscale.

## Quick start

```bash
cd webcam-server
chmod +x setup.sh
./setup.sh
```

That's it. The setup script:

1. Installs Python packages (`opencv-python`, `flask`, `pyopenssl`, `bcrypt`)
2. Generates a self-signed TLS certificate
3. Prompts you to choose a password
4. Writes `config.json` (600 permissions)
5. Installs and starts a macOS LaunchAgent so the server runs at login

## Viewing on iPhone

1. Open Safari and go to `https://<mac-local-ip>:8443`
2. You'll see a certificate warning — tap **Show Details → visit this website**
3. Log in with your password
4. The live feed fills the screen

For remote access, use your Tailscale IP instead of the local IP.

## Files

| File | Purpose |
|------|---------|
| `server.py` | Flask MJPEG streaming server |
| `setup.sh` | One-time setup script |
| `config.json` | Password hash + session secret (auto-generated, not committed) |
| `cert.pem` / `key.pem` | Self-signed TLS cert (auto-generated, not committed) |

## Management

```bash
# View logs
tail -f ~/Library/Logs/webcam-server.log

# Stop server
launchctl unload ~/Library/LaunchAgents/com.home.webcam-server.plist

# Start server
launchctl load -w ~/Library/LaunchAgents/com.home.webcam-server.plist

# Change password — edit config.json, replace password_hash:
python3 -c "import bcrypt; print(bcrypt.hashpw(b'newpassword', bcrypt.gensalt(12)).decode())"
```

## Security notes

- Password stored as bcrypt hash (cost 12), never in plaintext
- Session cookie is `HttpOnly`, `Secure`, `SameSite=Strict`, expires after 24 hours
- All traffic is TLS-encrypted (self-signed cert)
- No cloud, no accounts, no third-party services
