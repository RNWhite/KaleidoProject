import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./setup";
import {ShowDoctors } from "./ShowDoctors";

import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      doctors : ['Dr. Carlo Mertz302', 'Dr. Ava Hand954', 'Dr. Jimmy Dach745', 'Dr. Jay Dickins196'].map ( doctor => {
        return {name: doctor, votes: 0}
      })
    }
    this.handleVoting=this.handleVoting.bind(this)
  }
  async componentDidMount(){
    let socket = socketIOClient('/');
    socket.on('event', (data) => {
      this.setState({doctors:this.state.doctors.map(
        (el)=>el.name===data.name? Object.assign({},el,{votes: data.votes}):el
        
      )});
    })
    let req = await fetch('/votes');
    let data = await req.json();
    let doctorSet = [...this.state.doctors, ...data].reduce((hash, curr) => { hash[curr.name] = curr; return hash }, {})
    
    

    this.setState({doctors: Object.keys(doctorSet).map(k => doctorSet[k]) })
  }
  async handleVoting(doctor){
    let req = await fetch(`/votes/${doctor}`, {method: 'POST'})
    let data = await req.json()
      // ratingContract.voteForDoctor(doctor)
      // let votes=ratingContract.totalVotesFor(doctor).toNumber()
      this.setState({doctors:this.state.doctors.map(
        (el)=>el.name===doctor? Object.assign({},el,{votes: data.votes}):el
        
      )});
      // console.log(ratingContract.totalVotesFor(doctor).toNumber())
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
