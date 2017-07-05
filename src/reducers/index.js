import { combineReducers } from 'redux';
// import ajaxCallsInProgress from './ajaxStatusReducer';
import sources from './sourcesReducer'

const rootReducer = combineReducers({
  sources
});

export default rootReducer;
