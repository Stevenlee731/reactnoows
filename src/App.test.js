import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
