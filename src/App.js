import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from './components/page/Home';
import Albums from './components/page/Albums';
import AlbumDetails from './components/page/AlbumDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ul className="App-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/albums">Albums</Link></li>
          </ul>
        </header>
        <div className="App-intro">
          <Route path="/albums" component={Albums}/>
          <Route path="/albums/:id" component={AlbumDetails}/>
        </div>
      </div>
    );
  }
}

export default App;
