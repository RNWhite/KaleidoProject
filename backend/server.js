const express = require('express')
const mongoose = require('mongoose');
const Web3 =  require('web3');

// const url = "http://localhost:8545";

// const web3=new Web3(new Web3.providers.HttpProvider(url));
const web3 = new Web3(Web3.providers.HttpProvider('https://u0wocf8ycj-u0wabu53sf-rpc.us-east-2.kaleido.io', 0, 'u0gqsojsm2', '0OF1p1AhXLOOLKNq4jwu1xJQ8QaCR2ceUqwXeFatCtE'))

let ratingABI=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"doctorList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"doctorNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"doctor","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"doctor","type":"bytes32"}],"name":"voteForDoctor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let ratingAddress='0xeff0349b71581d0734980253a2b784aed33903e8';
// web3.eth.defaultAccount = web3.eth.accounts[0]
// console.log(web3.eth.accounts[0])
const ratingContract=web3.eth.contract(ratingABI).at(ratingAddress);

const app = express()
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  
});

var doctorSchema = new mongoose.Schema({
    name: String,
    votes: Number
  });

var Doctor = mongoose.model('Doctor', doctorSchema);

app.get('/votes', (req, res) => {
    Doctor.find({}).exec(function(err,doc){
        res.send(doc)
        })
    // res.send(ratingContract.totalVotesFor(''));
})

app.get('/votes/:docId', (req, res) => {
    res.send(ratingContract.totalVotesFor(req.params.docId))
}) 

app.post('/votes/:docId', (req, res) => {
    ratingContract.voteForDoctor(req.params.docId)
    const votes = ratingContract.totalVotesFor(req.params.docId).toNumber();
    Doctor.findOneAndUpdate({name:req.params.docId}, { "votes" : votes}, {upsert: 'true', returnNewDocument: 'true'}, (err, doc) => {
        res.send({name: req.params.docId, votes: votes});
    })
    
}) 

app.listen(3000,  () => {} );


