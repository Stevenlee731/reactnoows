import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categories(state = initialState.categories, action) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return state
    default:
      return state;
  }
}
