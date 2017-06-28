import { createAction } from 'redux-actions';
import ActionTypes from './types';
import {loadVideo, loadUserInfo} from '../method/index';
import axios from 'axios';

export const setVedioInfo = createAction(
  ActionTypes.LOAD_VIDEO_DATA,
  (data) => {
    return loadVideo(data);
  }
);

export const setUserInfo = createAction(
  ActionTypes.LOAD_USER_INFO,
  (userName) => {
    return loadUserInfo(userName);
  }
);
