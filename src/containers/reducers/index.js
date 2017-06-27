import {
  LOAD_VIDEO_DATA,
  LOAD_USER_INFO
} from '../actions/types';

import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions'

// const initState = {
//   vedioData: {
//     src: '',
//     poster: '',
//     paragraphs: []
//   },
//   userInfo: {
//     name: ''
//   }
// };

const initState = {
    src: '',
    poster: '',
    name: '',
    paragraphs: []

};

// let vedioDataReducer = (state = initState.vedioData, action) => {
//   switch (action.type) {
//     case LOAD_VIDEO_DATA:
//       return Object.assign({}, state, action.payload);
//     default:
//       return state;
//   }
// }
//
// let userInfoReducer = (state = initState.userInfo, action) => {
//   switch (action.type) {
//     case LOAD_USER_INFO:
//       return Object.assign({}, state, action.payload);
//     default:
//       return state;
//   }
// }

const combinedActions = handleActions({
  [LOAD_VIDEO_DATA]:  (state = initState, action) => {
    return Object.assign({}, state, action.payload);
  },

  [LOAD_USER_INFO]:  (state = initState, action) => {
    return Object.assign({}, state, action.payload);
  }
}, initState);


// let combinedReducers = combineReducers({vedioDataReducer, userInfoReducer});
let combinedReducers = combineReducers({combinedActions});
export default combinedReducers;
