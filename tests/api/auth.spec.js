// tests/api/auth.spec.js
const { test, expect } = require('@playwright/test');
const { getToken } = require('../../fixtures/tokenFixture');

test('API login and save token', async () => {
  const tokenData = await getToken();
  expect(tokenData).toBeTruthy();
  expect(tokenData.token).toBeTruthy();
  console.log('Token:', tokenData.token);
});
