import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://rahulshettyacademy.com/api/ecom/',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },
  reporter: [['html', { outputFolder: 'reports' }]],
});
