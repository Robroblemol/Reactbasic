import React, { Component } from 'react';

import './App.css';
import StatusList from './components/StatusList';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <StatusList />
        </header>
      </div>
    );
  }
}

export default App;
