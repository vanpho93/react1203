import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Word } from './Word'; // { Word: Word }
import { ListWord } from './ListWord';

class App extends Component {
  render() {
    const word1 = { en: 'One', vn: 'Mot', isMemorized: true };
    const word2 = { en: 'Two', vn: 'Hai', isMemorized: false };
    return (
      <div className="App">
        <ListWord title="English - Vietnamese" isShowForm={false} />
        <Word wordInfo={word1} />
        <Word wordInfo={word2} />
      </div>
    );
  }
}

export default App;
