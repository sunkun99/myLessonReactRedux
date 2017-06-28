import axios from 'axios';
import * as types from './../actions/types';

export const loadVideo = async(data) => {
  try {
    let result = await axios.get('../../data.json');
    return result.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const loadUserInfo = (userName) => {
  return {name: userName}
}
