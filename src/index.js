import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
