import axios from 'axios';
import * as types from './types';
import store from '../../stores/index';
export function loadVideo() {
  return (dispatch) => {
    axios
      .get('./data.json')
      .then((result) => {
        dispatch({
          type: types.LOAD_VIDEO_DATA,
          //payload: result.data
          payload: {src: 'abc', name : '1'}
        });
      });
  }

}

export function loadUserInfo() {
  return {
    type: types.LOAD_USER_INFO,
    payload: {
      name: 'Evan'
    }
  }
}
