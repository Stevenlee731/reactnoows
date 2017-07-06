import { combineReducers } from 'redux';
// import ajaxCallsInProgress from './ajaxStatusReducer';
import sources from './sourcesReducer'
import categories from './categoriesReducer'

const rootReducer = combineReducers({
  sources: sources,
  categories
});

export default rootReducer;
