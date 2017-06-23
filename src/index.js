import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/';//设置Store
import './styles/main.css';
import {Provider} from 'react-redux'; // react和redux连接的桥梁
//视频组件
import VideoDetail from './containers/VideoDetail';

let store = configureStore();
//渲染组件
// ReactDOM.render(<VideoDetail store={store}/>, document.getElementById('app'));

ReactDOM.render(
  <Provider store={store}>
    <VideoDetail store={store}/>
  </Provider>,
  document.getElementById('app')
);
