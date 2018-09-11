Simple application to demonstrate creation of a smart contract, deployment using truffle and kaleido, and a simple react front end. 

## Overview

The application is for voting for doctors. Socket.io keeps data in sync across all clients. MongoDB was used as a database to hold doctor information as well as a cache layer so inital page loads don't hit the blockchain. I deployed a smart contract with truffle using solidity and ethereum to store voting data.

The front end is a simple React application. To vote the user simply needs to click on the name of the doctor. 

Locally the entire application is 100% functional. 

I have a branch with Kaleido all set up, but I have an authentication issue with trying to connect. It has been failing silently which has been difficult to debug.

## Run the Application

To run the application you will need to be running  the React frontend, MongoDB, Truffle, and the Node server. Below are links for MongoDB and Truffle, please follow instructions for your platform to download and run. 

MongoDB:
https://www.mongodb.com

Truffle:
https://truffleframework.com


Starting the `testrpc` (Truffle) service can be done by `cd backend` and running `testrpc`.

In another terminal running `truffle migrate --network development` will deploy the smart contract (if trying to deploy to Kaleido change the network arg to `Doctors_node`). This may require changing the rating address, to get this run `truffle console --network development` followed by the command `SimpleStorage.address` and copy that line into `server.js` on line 10. 

You can then start the node backend server in another terminal by running `node server.js` in the `backend` folder. 

For the React frontend you will need to `cd` into the frontend folder and do an `npm install` and then `npm start`. This will start the frontend server on port 3001. 

I did not use Redux for this application as it uses a very simple frontend and adding Redux would be an overcomplication in my opinion. Redux shines with an application that shares state among multiple componenets and this application doesnt meet that criteria. 
