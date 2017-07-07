import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/home/HomePage'
import SourcesPage from './components/news/SourcesPage'
import ArticlePage from './components/news/ArticlePage'
import AboutPage from './components/about/About.js'
import {NavLink} from 'react-router-dom'

const navStyle = {
  textAlign: 'left',
  backgroundColor: 'white',
}

const navItemStyle = {
  transform: 'translatex(-100%)'
}

const navPadding = {
  paddingRight: '1rem',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <nav style={navStyle}>
            <div className="nav-wrapper">
              <div className="col s12">
                <NavLink className="brand-logo" to="/" >React News</NavLink>
                <ul className="right hide-on-med-and-down">
                  <li className="nav-item">
                    <NavLink to="/sources" >categories</NavLink>
                  </li>
                  <li style={navPadding} className="nav-item">
                    <NavLink to="/about" >about</NavLink>
                  </li>
                </ul>
                <ul id="nav-mobile" className="side-nav" style={navItemStyle}>
                  <li className="nav-item">
                    <NavLink to="/sources" >categories</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" >about</NavLink>
                  </li>
                </ul>
                <a className="button-collapse" href="#" data-activates="nav-mobile">
                  <i className="material-icons">view_headline</i>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <Route exact path="/" component={HomePage}/>
          <Route path="/sources" component={SourcesPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/source/:id" component={ArticlePage}/>
        </div>
        <footer className="aligner">
          <nav>
            <NavLink className="nav-footer" to="/" >React News</NavLink>
            {" | "}
            <NavLink className="nav-footer" to="/sources" >categories</NavLink>
            {" | "}
            <NavLink className="nav-footer" to="/about" >about</NavLink>
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
