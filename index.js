const express = require("express");
const Web3 = require("web3");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3000;

// Initialize web3 instance with Ganache RPC server
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// Example smart contract ABI and address (replace with your own)
const contractABI = [ /* Your Contract ABI Here */ ];
const contractAddress = "0x8d7fD116e7Ada1af27f24B304639C50740B762866";

// Initialize contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Middleware
app.use(bodyParser.json());

// Route to cast a vote
app.post("/vote", async (req, res) => {
  const { voterAddress, candidateId } = req.body;

  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.vote(candidateId).send({ from: voterAddress });

    res.json({ status: "success", transactionHash: result.transactionHash });
  } catch (error) {
    console.error("Error casting vote:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Route to get voting results
app.get("/results", async (req, res) => {
  try {
    const results = await contract.methods.getResults().call();
    res.json({ status: "success", results });
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Blockchain voting app listening at http://localhost:${port}`);
});
