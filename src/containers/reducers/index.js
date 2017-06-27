import ActionTypes from '../actions/types';

import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions'

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

const vedioDetailReducer = handleActions({
  [ActionTypes.LOAD_VIDEO_DATA]:  (state = initState, action) => {
    return Object.assign({}, state, {vedioData: action.payload});
  },

  [ActionTypes.LOAD_USER_INFO]:  (state = initState, action) => {
    return Object.assign({}, state, {userInfo: action.payload});
  }
}, initState);

export default combineReducers({vedioDetailReducer});
