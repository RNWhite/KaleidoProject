import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./setup";
import {ShowDoctors } from "./ShowDoctors";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      doctors : ['Dr. Carlo Mertz302', 'Dr. Ava Hand954', 'Dr. Jimmy Dach745', 'Dr. Jay Dickins196'].map ( doctor => {
        return {name: doctor, rating: ratingContract.totalVotesFor(doctor).toNumber()}
      })
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(doctor){
  
    ratingContract.voteForDoctor(doctor)
    let votes=ratingContract.totalVotesFor(doctor).toNumber()
    this.setState({doctors:this.state.doctors.map(
      (el)=>el.name===doctor? Object.assign({},el,{rating:votes}):el
      
    )});
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ethereum</h1>
        </header>
        <p className="App-intro">
          Doctor Rating Application in Ethereum and React using Truffle!
        </p>
        <div className="doctor-table">
          <ShowDoctors doctors={this.state.doctors} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;
