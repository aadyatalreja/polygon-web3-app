import { Component, OnInit } from '@angular/core';
import { ethers, parseUnits } from 'ethers'; // Ethereum library for blockchain interactions.
import { CommonModule } from '@angular/common'; // Provides common Angular directives like `*ngIf` and `*ngFor`.
import { FormsModule } from '@angular/forms'; // Enables two-way data binding.
import { MatInputModule } from '@angular/material/input'; // Material input fields.
import { MatButtonModule } from '@angular/material/button'; // Material buttons.
import { MatFormFieldModule } from '@angular/material/form-field'; // Material form field container.
import { RouterModule } from '@angular/router'; // Angular router module.

declare global {
  interface Window {
    ethereum: any; // Extend the `window` object to include the `ethereum` property for MetaMask.
  }
}

@Component({
  selector: 'app-root', // HTML tag for this component.
  templateUrl: './app.component.html', // Associated HTML template.
  styleUrls: ['./app.component.css'], // Associated CSS for styling.
  standalone: true, // Marks this component as a standalone component (doesn't require an NgModule).
  imports: [
    CommonModule, // Angular directives.
    FormsModule, // Supports forms and two-way binding.
    MatInputModule, // Material input field styling.
    MatButtonModule, // Material buttons.
    MatFormFieldModule, // Material form fields.
    RouterModule, // Enables routing.
  ],
})
export class AppComponent implements OnInit {
  // Declare component variables.
  recipientAddress: string = ''; // Recipient's wallet address.
  amount: number = 0; // Token amount to send.
  contractAddress: string = ''; // Optional token contract address.
  txHash: string | undefined = ''; // Transaction hash for confirmation.
  errorMessage: string | undefined = ''; // Error message display.
  balance: string | undefined = ''; // User's balance display.

  provider: ethers.BrowserProvider | undefined; // Ethers.js provider for blockchain access.
  signer: ethers.Signer | undefined; // Signer for signing transactions.
  walletAddress: string | undefined; // Connected wallet address.

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
      this.getSigner();
    } else {
      this.errorMessage = 'MetaMask is not installed or the application is running outside a browser context.';
    }
  }
  

  async getSigner(): Promise<void> {
    // Request accounts and set up the signer.
    if (this.provider) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.walletAddress = accounts[0]; // Store the connected wallet address.
        this.signer = await this.provider.getSigner(); // Set up the signer.
        this.getBalances(); // Fetch balances.
      } catch (error) {
        this.errorMessage = 'Failed to get signer';
      }
    }
  }

  async getBalances(): Promise<void> {
    // Fetch wallet and token balances.
    try {
      if (!this.walletAddress || !this.provider) return;

      const balance = await this.provider.getBalance(this.walletAddress);
      this.balance = ethers.formatUnits(balance, 18) + ' POL'; // Format balance as POL.

      if (this.contractAddress) {
        const tokenContract = new ethers.Contract(
          this.contractAddress,
          ['function balanceOf(address account) public view returns (uint256)'],
          this.provider
        );
        const tokenBalance = await tokenContract['balanceOf'](this.walletAddress);
        this.balance += ` | ${ethers.formatUnits(tokenBalance, 18)} Tokens`; // Append token balance.
      }
    } catch (error) {
      this.errorMessage = 'Failed to fetch balances';
    }
  }

  async onSubmit(): Promise<void> {
    // Handle token transfer.
    try {
      if (!this.recipientAddress || !this.amount) {
        this.errorMessage = 'Recipient address and amount are required';
        return;
      }

      /* if (!this.contractAddress) {
        this.errorMessage = 'Token contract address is required';
        return;
      } */

      if (!this.signer) {
        this.errorMessage = 'Signer is not available';
        return;
      }

      const tokenContract = new ethers.Contract(
        this.contractAddress,
        ['function transfer(address to, uint256 amount) public returns (bool)'],
        this.signer
      );

      const tx = await tokenContract['transfer'](
        this.recipientAddress,
        parseUnits(this.amount.toString(), 18),
        { gasLimit: ethers.toBigInt(100000)} // Parse token amount.
      );

      await tx.wait(); // Wait for the transaction to be mined.

      this.txHash = tx.hash; // Store transaction hash for display.
      this.errorMessage = ''; // Clear errors.
      this.getBalances(); // Refresh balances.
    } catch (error: any) {
      this.errorMessage = error.message || 'An error occurred'; // Display any errors.
    }
  }
}