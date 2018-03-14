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
        <button className="btn btn-success" onClick={() => this.setState({ num: this.state.num + 1 })}>
          Increase
        </button>
        <br />
        <br />
        <button className="btn btn-warning"  onClick={() => this.setState({ num: this.state.num - 1 })}>
          Descrease
        </button>
      </div>
    );    
  }
}

export default App;
