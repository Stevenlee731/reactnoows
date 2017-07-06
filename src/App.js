import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/home/HomePage'
import SourcesPage from './components/news/SourcesPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route exact path="/" component={HomePage}/>
          <Route path="/sources" component={SourcesPage}/>
        </div>
      </div>
    );
  }
}

export default App;
