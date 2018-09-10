const Web3 =  require('web3');

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let ratingABI=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"doctorList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"doctorNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"doctor","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"listDoctors","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"doctor","type":"bytes32"}],"name":"voteForDoctor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let ratingAddress='0x9cd417ad0619f8f8fa039896c0bc4238962793e3';
web3.eth.defaultAccount = web3.eth.accounts[0]


const ratingContract=web3.eth.contract(ratingABI).at(ratingAddress);
// export {ratingContract};

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send(ratingContract.listDoctors());
    // res.send(ratingContract.totalVotesFor(''));
})

app.listen(3000,  () => {} );


