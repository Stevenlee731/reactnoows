import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import {loadSources, loadCategoriesSuccess, loadHomePageArticles} from './actions/newsActions'
import _ from 'lodash'

const categories = ['polygon', 'bloomberg', 'cnn', 'engadget', 'espn', 'mashable', 'mtv-news', 'techcrunch']
const shuffled = _.shuffle(categories)

const store = configureStore()
store.dispatch(loadSources())
store.dispatch(loadHomePageArticles(shuffled[1], shuffled[2], shuffled[3]))
store.dispatch(loadCategoriesSuccess())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
