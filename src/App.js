import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 10 };
  }
  render() {
    return (
      <div className="container">
        <h3>Value: {this.state.num}</h3>
        <button className="btn btn-success">Increase</button>
        <br />
        <br />
        <button className="btn btn-warning">Descrease</button>
      </div>
    );    
  }
}

export default App;
