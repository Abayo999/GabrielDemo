// Import the Web3.js library
const Web3 = require('web3');

// Create a new instance of Web3
const web3 = new Web3('http://localhost:7545'); // Replace with your Ganache RPC URL

// Connect to the Ganache blockchain
async function connectToGanache() {
  try {
    // Check if the connection is successful
    const isConnected = await web3.eth.net.isListening();
    if (isConnected) {
      console.log('Connected to Ganache blockchain');
    } else {
      console.log('Failed to connect to Ganache blockchain');
    }
  } catch (error) {
    console.error('Error connecting to Ganache blockchain:', error);
  }
}

// Call the function to connect to Ganache
connectToGanache();