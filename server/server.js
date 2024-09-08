const express = require('express');
const Web3 = require('web3');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Ganache blockchain
const web3 = new Web3('http://127.0.0.1:8545');
const contractABI = []; // Replace with the actual ABI after compilation
const contractAddress = ''; // Replace with the deployed contract address

const votingContract = new web3.eth.Contract(contractABI, contractAddress);

// MongoDB setup
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'votingApp';
let db;

MongoClient.connect(mongoURI, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db(dbName);
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Register Voter Endpoint
app.post('/register', async (req, res) => {
  try {
    const { address } = req.body;
    const accounts = await web3.eth.getAccounts();
    await votingContract.methods.registerVoter(address).send({ from: accounts[0] });
    res.json({ message: 'Voter registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Vote Endpoint
app.post('/vote', async (req, res) => {
  try {
    const { candidateId, voterAddress } = req.body;
    await votingContract.methods.vote(candidateId).send({ from: voterAddress });

    // Get updated results from the contract
    const results = await votingContract.methods.getResults(candidateId).call();

    // Store vote in MongoDB
    await db.collection('votes').insertOne({
      candidateId,
      voterAddress,
      timestamp: new Date(),
    });

    // Update results in MongoDB
    await db.collection('results').updateOne(
      { _id: 'current' },
      { $set: { [`candidate_${candidateId}`]: results } },
      { upsert: true }
    );

    res.json({ message: 'Vote cast successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Results Endpoint
app.get('/results', async (req, res) => {
  try {
    const results = await db.collection('results').findOne({ _id: 'current' });
    res.json(results || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Voting Status Endpoint
app.get('/status', async (req, res) => {
  try {
    const status = await votingContract.methods.getVotingStatus().call();
    res.json({ isActive: status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
