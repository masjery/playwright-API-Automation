Project: Playwright API Mini Automation

Short description
This is a small Playwright API automation project that logs in to a public demo API, saves the returned token to token.json, and demonstrates a follow-up API call using that token. It is intended as a learning / demo project for API testing with Playwright.

What this repo contains
- fixtures/tokenFixture.js    : helper that performs API login and saves token
- utils/tokenStore.js        : read/write token.json safely
- tests/api/auth.spec.js     : test that performs API login and saves token
- tests/api/products.spec.js : example test that uses saved token to call an authenticated endpoint
- token.json                 : (created automatically after first successful login)
- package.json               : project scripts and dependencies
- playwright.config.js       : optional Playwright config

Prerequisites
- Node.js (v16+ recommended)
- npm
- Internet access to public demo API

Install
1. clone or copy this repo to your machine
2. run
   npm install
3. install Playwright browsers (if not already)
   npx playwright install

Run tests
- Run all tests:
  npx playwright test

- Run a single test file:
  npx playwright test tests/api/auth.spec.js

Notes about token.json
- token.json is written automatically by the login test and contains the token response.
- Do not commit token.json to a public repository. Add token.json to .gitignore.

Security
- Do not store real credentials or secrets in the repository.
- Use environment variables for sensitive values when needed.

Troubleshooting
- If login fails, open Postman and POST to the login endpoint to confirm credentials and response.
- If token.json becomes invalid, delete it and rerun the login test.
- If an endpoint returns 401/403, verify expected header format (Authorization: Bearer <token> or Cookie: NRBA_SESSION=<token>).

How to extend
- Add more API tests under tests/api to exercise endpoints (add to cart, place order).
- Add CI (GitHub Actions) to run tests on push.
