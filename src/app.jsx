import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes.jsx';
import { Router, browserHistory, RouterContext } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

export default function(serverProps) {
    return (
        <Provider store={store} key="provider">
            {getRoutes(serverProps)}
        </Provider>
    );
}

function getRoutes(serverProps) {
    //If we run app in isomorphic env
    //We use this method for render routes
    if (serverProps) {
        return <RouterContext {...serverProps} />;
    }
    const history = syncHistoryWithStore(browserHistory, store);

    return <Router routes={routes} history={history} />;
}