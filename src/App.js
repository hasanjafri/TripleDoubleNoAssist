import React, { Component } from 'react';
import './App.css';

import TDNASidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Triple Double No Assist</h1>
        </header>
        <TDNASidebar/>
      </div>
    );
  }
}

export default App;
