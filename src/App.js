import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Status extends Component {
  render(){
    return (
      <div>
        <p>Wow, Mi skribas en esperanto!</p>
        <p><button>Mi sxatas gin</button></p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Status/>
        </header>
      </div>
    );
  }
}

export default App;
