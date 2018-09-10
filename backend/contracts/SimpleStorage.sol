pragma solidity ^0.4.17;
// We have to specify what version of compiler this code will compile with

contract SimpleStorage {
  /* mapping field below is equivalent to an associative array or hash.
  */
  
  mapping (bytes32 => uint8) public ratingsReceived;
  
  /* We will use an array of bytes32 to store the list of doctors
  */
  
  bytes32[] public doctorList;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of doctors for which users will give ratings
  */
  function SimpleStorage(bytes32[] doctorNames) public {
    doctorList = doctorNames;
  }

  // This function returns the total ratings a doctor has received so far
  function totalVotesFor(bytes32 doctor) view public returns (uint8) {
    return ratingsReceived[doctor];
  }

  // This function increments the vote count for the specified doctor. Equivalent to upvoting
  function voteForDoctor(bytes32 doctor) public {
    ratingsReceived[doctor] += 1;
  }
}