import React, { Component } from 'react';
import logo from '../../logo.png';
import './App.css';

import Table from '../Table/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
            </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-header">
                Leaderboard
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="overflow-table">
                <Table />
              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          Vulnscope
        </footer>
      </div>
    );
  }
}

export default App;
