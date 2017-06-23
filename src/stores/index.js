/**
 * Created by evan on 16/9/17.
 */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import reducers from '../containers/reducers/';

let createLogger;
if (process.env.NODE_ENV !== 'production') {
  createLogger = require('redux-logger');
}

function reduxStore(initialState) {
  let middlewares = [reduxThunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = middlewares.concat([
      createLogger()
    ]);
  }
  return createStore(
    reducers,
    initialState,
    //添加必要中间件
    applyMiddleware(...middlewares)
  );
}

export default reduxStore;
