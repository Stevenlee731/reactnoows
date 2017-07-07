import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articles(state = initialState.homePageArticles, action) {
  switch (action.type) {
    case types.LOAD_HOMEPAGE_ARTICLES_SUCCESS:
      return Object.assign({}, action.articles)
    default:
      return state;
  }
}
