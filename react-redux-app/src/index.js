import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//reducer
import {characterReducer} from './reducers/characterReducer';

//styles
import './index.scss';

const store= createStore(
  characterReducer, 
  applyMiddleware(thunk)
  );

ReactDOM.render(
<Provider store= {store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
