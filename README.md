
# Playwright API Automation Framework

## Overview
This project is a **Playwright-based API automation framework** built using **JavaScript**.  
It demonstrates **token-based authentication**, **API chaining**, and **response validation** using **Rahul Shetty’s public demo API**.  
The framework follows a modular structure for better scalability, maintainability, and reusability — ideal for showcasing API automation skills.


##  Project Structure
```

PlaywrightAPIAutomation/
│
├── fixtures/              # Reusable setup and token utilities
│   └── tokenFixture.js
│
├── tests/                 # API test suites
│   └── api/
│       └── auth.spec.js
│
├── token.json             # Stores generated token
├── package.json
└── README.md


##  Tech Stack
- **Playwright** – API testing and automation  
- **JavaScript (Node.js)** – Implementation language  
- **Chai / Expect assertions** – Response validation  
- **JSON-based token storage** – Caching login tokens  

---

##  Features Automated
- Login via API using valid credentials  
- Token generation and caching (`token.json`)  
- Authenticated API calls using saved token  
- API response validation and status checks  


##  How to Run Tests

### Install Dependencies
```bash
npm install
npx playwright install
````

### Execute Tests

```bash
npx playwright test
```

### View Results

Playwright will display detailed API responses and test results in the terminal or HTML report (if configured).


## Reporting

Optionally, you can enable Playwright’s built-in **HTML report**:

```bash
npx playwright show-report
```


## Future Enhancements

* Add more API endpoints (products, orders, cart)
* Integrate environment-based configs
* Enable CI/CD pipeline via **GitHub Actions**


## Author

**Masrura Akter**
Automation Engineer | Playwright | JavaScript | API Testing
🌐 [GitHub Profile](https://github.com/masjery)

