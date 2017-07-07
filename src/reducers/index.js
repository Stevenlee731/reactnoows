import { combineReducers } from 'redux';
// import ajaxCallsInProgress from './ajaxStatusReducer';
import sources from './sourcesReducer'
import categories from './categoriesReducer'
import articles from './articlesReducer'
import homePageArticles from './homePageArticlesReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'


const rootReducer = combineReducers({
  sources: sources,
  categories,
  articles,
  homePageArticles,
  ajaxCallsInProgress
});

export default rootReducer;
