import "typeface-alegreya";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from "./reducers";
import { load as loadStorage, sync as syncStorage } from "./actions/storage";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

window.addEventListener("unload", () => store.dispatch(syncStorage()));

store.dispatch(loadStorage());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
