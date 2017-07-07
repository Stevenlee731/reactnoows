import { combineReducers } from 'redux';
// import ajaxCallsInProgress from './ajaxStatusReducer';
import sources from './sourcesReducer'
import categories from './categoriesReducer'
import articles from './articlesReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  sources: sources,
  categories,
  articles,
  ajaxCallsInProgress
});

export default rootReducer;
