# Polygon Web3 App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

---
## Problem Statement
Build a simple web application that allows users to send crypto tokens via the Polygon blockchain. The application should include a form for the following inputs:

1. Recipient Wallet Address
2. Token Amount
3. Contract Address (Optional)
   
Use the polygon faucet to fund your wallet with some test MATIC -  https://blog.chain.link/polygon-amoy-matic/
Note: The currency symbol for Polygon has been changed from MATIC to POL in its recent upgrade.

The application should perform the following tasks:
1. Connect to the Polygon amoy testnet using web3.js or ethers.js.
2. Allows the user to send an ERC-20 token transaction from your wallet to the recipient(use the provided token contract address for ERC-20 transfers).
3. Display the transaction hash or an error message upon submission.
4. Implement basic input validation to ensure all required fields are completed correctly.

#### BONUS - Use Angular Frontend framework to implement the web application.

### Bonus Features:

1. Integrate with MetaMask for transaction signing.
2. Display real-time balances for both POL and ERC-20 tokens.
3. Include a section to display recent transactions by querying the Polygon blockchain (optional: use a service like Polygonscan API).
   
<i> Make sure to submit the solution as a GitHub repository, including instructions in a README.md file for setting up and running the application.</i>

#### BONUS - Deploy this on Celo: https://docs.celo.org/developer/deploy/remix.
---
## Features
- Connect to MetaMask.
- Fetch POL (MATIC) and ERC-20 token balances.
- Send tokens via the Polygon network.
- Responsive UI using Angular Material.

---

## Requirements
- [Node.js](https://nodejs.org/) (v22.8.0).
- [Angular CLI](https://angular.io/cli) (v15.2.11).
- MetaMask installed in your browser.
- A wallet connected to the Polygon network.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---
## Code scaffolding

Run the following command to generate a new component:

```bash
ng generate component component-name
```
You can also use the following commands to generate other elements:

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

---
## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

---
## Running Unit Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run the following command:

```bash
ng test
```

---
## Running end-to-end tests

## Running End-to-End Tests

To execute the end-to-end tests via a platform of your choice, run the following command:

```bash
ng e2e
```
To use this command, you need to first add a package that implements end-to-end testing capabilities.

---
## Troubleshooting
If you encounter issues:  
1. Ensure MetaMask is installed and connected to the correct network.  
2. Check the browser console for error messages.  
3. Verify that your wallet has sufficient funds and gas fees for transactions.
   
---
## Usage

1. **Connect Wallet**:  
   The app will automatically attempt to connect to your MetaMask wallet. If MetaMask is not installed, you will see an error message.

2. **View Balance**:  
   After connecting your wallet, the app will display your POL (MATIC) balance. If you enter an ERC-20 token contract address, it will also display the balance of the specified token.

3. **Send Tokens**:  
   - Fill in the recipient wallet address.  
   - Enter the amount of tokens to send.  
   - Optionally, enter the ERC-20 token contract address if you're sending tokens other than POL.  
   - Click **"Send Tokens"** to initiate the transaction.  
   - The transaction hash will appear upon success.

---

## Additional Resources

- For more information on using the [Angular CLI](https://angular.dev/tools/cli), including detailed command references, visit the Angular CLI Overview and Command Reference page.

- For working with [Polygon](https://polygon.technology/docs/), visit the official Polygon Documentation.

- For information on [ERC-20 tokens](https://eips.ethereum.org/EIPS/eip-20), see the Ethereum Token Standard.
