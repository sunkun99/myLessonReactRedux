import axios from 'axios';
import {
  LOAD_VIDEO_DATA,
  LOAD_USER_INFO,
  DISPLAY_SK,
} from './types';
export function loadVideo() {
  return (dispatch) => {
    axios
      .get('./data.json')
      .then(result => {
        dispatch({
          type: LOAD_VIDEO_DATA,
          payload: result.data
        })
      });
  }
}

export function loadUserInfo() {
  return {
    type: LOAD_USER_INFO,
    payload: {
      name: 'Evan'
    }
  }
}

export function displaySk() {
  return {
    type: DISPLAY_SK,
    payload: {
      name: 'sk'
    }
  }
}
