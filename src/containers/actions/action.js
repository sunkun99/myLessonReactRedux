import { createAction } from 'redux-actions';
import * as ActionTypes from './types';

export const setVedioInfo = createAction(
  ActionTypes.LOAD_VIDEO_DATA
);

export const setUserInfo = createAction(
  ActionTypes.LOAD_USER_INFO
);
