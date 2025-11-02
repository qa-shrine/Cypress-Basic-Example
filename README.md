# Cypress Basic Example

A minimal Cypress Test example repository showing a simple test structure, Cypress config, and npm scripts to run tests. This repo is intended as a learning starting point or quick template for writing end-to-end tests with Cypress.

## Table of contents

- About
- Prerequisites
- Install
- Run tests
- Cypress configuration highlights
- Tests and examples
- Project structure
- Troubleshooting & tips



## About

This repository demonstrates how to set up Cypress with a small number of example tests. It includes:

- A `cypress.config.ts` with baseUrl configuration.
- Example tests in the `cypress/e2e/` directory.
- Support files for custom commands and configurations.
- Useful npm scripts for running tests.


## Prerequisites

- Node.js 24 or newer (24 is currently LTS version). Check with `node -v`.
- npm (comes with Node.js) or a compatible package manager.


## Install

1. Clone the repository (if you haven't already):

	 git clone https://github.com/qa-shrine/Cypress-Basic-Example.git

2. Install dependencies:

```bash
npm install
```

Note: Cypress is installed as a dev dependency when you run `npm install`.


## Run tests

Available npm scripts (defined in `package.json`):

- `npm test` — run Cypress tests in headless mode.
- `npm run test:headed` — open Cypress Test Runner for interactive testing.

Examples:

Run the full test suite (headless):

```bash
npm test
```

Run tests with the Cypress Test Runner (interactive):

```bash
npm run test:headed
```

## Cypress configuration highlights

Key settings are in `cypress.config.ts`:

- `baseUrl: 'https://practicetestautomation.com/'` — base URL for test URLs.
- `specPattern: 'cypress/e2e/**/*.cy.ts'` — where test files are located.
- `supportFile: 'cypress/support/e2e.ts'` — support file for shared configuration.

The config uses TypeScript for type-safe test writing.


## Tests and examples

There are two example tests in `cypress/e2e/`:

- `basic.cy.ts` — simple smoke test that navigates to `https://practicetestautomation.com/` and asserts the page title contains "Practice Test Automation".
- `login.cy.ts` — a small illustrative login flow that fills username/password inputs and verifies a welcome element. It uses `id` selectors as `data-testid` are not available but would recommended these practice for test stability.

These tests are intentionally minimal. Use them as templates when adding real tests for your application.


## Project structure

At a glance:

```
package.json                # npm scripts and dev dependencies
cypress.config.ts           # Cypress Test configuration
cypress/
  e2e/                      # Example test files
    basic.cy.ts
    login.cy.ts
  support/                  # Support files
    e2e.ts
    commands.ts
	index.d.ts				# As this is in TS not JS
tsconfig.ts            		# As this is in TS not JS
README.md                   # (this file)
```


## Troubleshooting & tips

- Cypress not launching / tests failing locally:
	- Ensure Node.js and npm are up-to-date.
	- Reinstall deps: `npm ci`.
	- Try headed mode to see what's happening: `npm run test:headed`.

- Tests are flaky:
	- Prefer stable selectors (e.g., `data-testid`) over brittle CSS/XPath.
	- Increase timeouts in `cypress.config.ts` or use Cypress built-in waits.
	- Use video recordings and screenshots to debug failures.

- Running against a local app:
	- If your app runs on a specific port, update `baseUrl` in `cypress.config.ts` or use `cy.visit()` with the full URL.