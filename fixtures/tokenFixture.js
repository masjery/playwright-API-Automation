// fixtures/tokenFixture.js
const { request } = require('@playwright/test');
const { saveToken, readToken } = require('../utils/tokenStore');

const LOGIN_URL = 'https://rahulshettyacademy.com/api/ecom/auth/login';

// Replace these with the demo credentials you use on the Rahul Shetty client (or create a demo account)
const CREDENTIALS = {
  userEmail: 'testtest002@gmail.com',
  userPassword: 'Test@1234'
};

async function getToken() {
  // try cached
  const cached = readToken();
  if (cached && cached.token) {
    console.log('Using cached token.');
    return cached;
  }

  // login via API
  const apiContext = await request.newContext({
    extraHTTPHeaders: { 'Content-Type': 'application/json' }
  });

  const resp = await apiContext.post(LOGIN_URL, { data: CREDENTIALS });

  if (!resp.ok()) {
    const body = await resp.text().catch(() => '');
    throw new Error(`API login failed: ${resp.status()} ${body}`);
  }

  const data = await resp.json();
  if (!data || !data.token) {
    throw new Error('Login response did not contain token.');
  }

  // save full response (may include userId/message)
  saveToken(data);
  console.log('Saved token to token.json');
  return data;
}

module.exports = { getToken };
