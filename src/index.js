import React from 'react';
import ReactDOM from 'react-dom';
import {createLogger} from 'redux-logger';
import 'tachyons'; 
import reportWebVitals from './reportWebVitals'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';


import {searchRobots, requestRobots} from './reducers'
import './index.css';
import App from './containers/App';

// root reducer
const rootReducer = combineReducers({searchRobots, requestRobots});

// redux middleware
const logger = createLogger(); 
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App  />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
