import {
  LOAD_VIDEO_DATA,
  LOAD_USER_INFO,
  DISPLAY_SK
} from '../actions/types';

import {combineReducers} from 'redux';

let reducer1 = (state = {}, action) => {
  switch (action.type) {
    case LOAD_VIDEO_DATA:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

let reducer2 = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

let reducer3 = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_SK:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

let combinedReducers = combineReducers({reducer1, reducer2, reducer3});
export default combinedReducers;
