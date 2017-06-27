import { createAction } from 'redux-actions';
import ActionTypes from './types';
import {loadVideo, loadUserInfo} from '../method/index';

export const setVedioInfo = createAction(
  ActionTypes.LOAD_VIDEO_DATA,
  loadVideo
);

export const setUserInfo = createAction(
  ActionTypes.LOAD_USER_INFO,
  loadUserInfo
);
