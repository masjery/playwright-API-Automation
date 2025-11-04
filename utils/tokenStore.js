// utils/tokenStore.js
const fs = require('fs');
const path = require('path');

const TOKEN_PATH = path.join(__dirname, '..', 'token.json');

function saveToken(obj) {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(obj, null, 2));
}

function readToken() {
  try {
    if (!fs.existsSync(TOKEN_PATH)) return null;
    const raw = fs.readFileSync(TOKEN_PATH, 'utf8').trim();
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && Object.keys(parsed).length ? parsed : null;
  } catch (e) {
    // corrupted file -> ignore and regenerate next run
    console.warn('token.json is invalid, will regenerate on login.');
    return null;
  }
}

module.exports = { saveToken, readToken, TOKEN_PATH };
