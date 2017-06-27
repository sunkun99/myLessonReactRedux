import {
  LOAD_VIDEO_DATA,
  LOAD_USER_INFO
} from '../actions/types';

import {combineReducers} from 'redux';

const initState = {
  vedioData: {
    src: '',
    poster: '',
    paragraphs: []
  },
  userInfo: {
    name: ''
  }
};

let vedioDataReducer = (state = initState.vedioData, action) => {
  switch (action.type) {
    case LOAD_VIDEO_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

let userInfoReducer = (state = initState.userInfo, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

let combinedReducers = combineReducers({vedioDataReducer, userInfoReducer});
export default combinedReducers;
