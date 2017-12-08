/* eslint-disable import/default */
import 'babel-polyfill';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

import {loadAuthors} from './actions/authorActions';
import {loadCourses} from './actions/courseActions';
import App from './components/App';
import configureStore from './store/configureStore';

const customHistory = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(customHistory);

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
  <ConnectedRouter history={customHistory}>
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('app'));
