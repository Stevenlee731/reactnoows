import { combineReducers } from 'redux';
// import ajaxCallsInProgress from './ajaxStatusReducer';
import sources from './sourcesReducer'
import categories from './categoriesReducer'
import articles from './articlesReducer'

const rootReducer = combineReducers({
  sources: sources,
  categories,
  articles
});

export default rootReducer;
