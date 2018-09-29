import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Switch>
            <Route exact path="/" component={}/>
            <Route exact path="/albums" component={}/>
            <Route path="/albums/:id" component={}/>
            <Redirect to="/" />
          </Switch>
        </p>
      </div>
    );
  }
}

export default App;
