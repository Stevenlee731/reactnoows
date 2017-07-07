import Api from '../api/newsApi'
import * as types from './actionTypes'
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSourcesSuccess(sources) {
  return {type: types.LOAD_SOURCES_SUCCESS, sources};
}

export function loadArticlesSuccess(articles) {
  return {type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function loadHomePageArticlesSuccess(articles) {
  return {type: types.LOAD_HOMEPAGE_ARTICLES_SUCCESS, articles};
}

export function loadCategoriesSuccess() {
  return {type: types.LOAD_CATEGORIES_SUCCESS};
}

export function loadSources() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return Api.getSources().then(response => {
      dispatch(loadSourcesSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadArticles(source) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return Api.getArticles(source).then(response => {
      dispatch(loadArticlesSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(error))
      throw(error);
    });
  };
}

export function loadHomePageArticles(first, second, third) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return Api.getHomePageArticles(first, second, third).then(response => {
      dispatch(loadHomePageArticlesSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(error))
      throw(error);
    });
  };
}
