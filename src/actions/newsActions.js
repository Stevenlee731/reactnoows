import Api from '../api/newsApi'
import * as types from './actionTypes'

export function loadSourcesSuccess(sources) {
  return {type: types.LOAD_SOURCES_SUCCESS, sources};
}

export function loadArticlesSuccess(articles) {
  return {type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function loadCategoriesSuccess() {
  return {type: types.LOAD_CATEGORIES_SUCCESS};
}

export function loadSources() {
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    return Api.getSources().then(response => {
      dispatch(loadSourcesSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadArticles(source) {
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    return Api.getArticles(source).then(response => {
      dispatch(loadArticlesSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}
