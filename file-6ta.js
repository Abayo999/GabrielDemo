// Import the Web3.js library
const Web3 = require('web3');

// Create a new instance of Web3
const web3 = new Web3();

// Connect to the user's MetaMask account
async function connectToMetaMask() {
  try {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      // Request access to the user's MetaMask account
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the user's MetaMask account
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const account = accounts[0];

      console.log('Connected to MetaMask:', account);
    } else {
      console.log('MetaMask not detected. Please install MetaMask.');
    }
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
  }
}

// Call the function to connect to MetaMask
connectToMetaMask();