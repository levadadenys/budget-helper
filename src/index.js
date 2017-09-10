import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './js/reducers';
import { loadState, saveState } from './js/utils/LocalStorage';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.css';
import 'bootstrap/dist/js/bootstrap.min';

import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();
const store = createStore(combineReducers(reducers), persistedState,
  devToolsEnhancer());

store.subscribe(throttle(() => {
  saveState({
    incomeAndExpensesStore: store.getState().incomeAndExpensesStore,
    categoriesStore: store.getState().categoriesStore
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
