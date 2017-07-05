import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sources(state = initialState.sources, action) {
  switch (action.type) {
    case types.LOAD_SOURCES_SUCCESS:
      return action.sources;
    default:
      return state;
  }
}
