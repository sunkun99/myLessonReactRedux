import {
  LOAD_VIDEO_DATA,
  LOAD_USER_INFO
} from '../actions/types';

import {combineReducers} from 'redux';

const initState = {
  src: null,
  poster: null,
  name: null,
  paragraphs: []
};

let reducer1 = (state = initState, action) => {
  switch (action.type) {
    case LOAD_VIDEO_DATA:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

let reducer2 = (state = initState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

let combinedReducers = combineReducers({reducer1, reducer2});
export default combinedReducers;
