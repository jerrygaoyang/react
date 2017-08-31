import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from '../store/index'
import App from '../views/app'
import hello from '../components/product'

const route = (
    <Provider store={store}>
        <Router component={App} history={hashHistory}>
            <Route path='/' component={hello} />
        </Router>
    </Provider>
);

export default route


