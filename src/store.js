import { createStore, compose, applyMiddleware } from 'redux';

import promiseMiddleware from './middlewares/promises.js';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

const router = routerMiddleware(browserHistory);

var finalCreateStore = compose(
    applyMiddleware(promiseMiddleware, router),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

var store = finalCreateStore(reducers);

export default store;