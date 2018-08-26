import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from '../store/index'
import App from '../views/app'
import hello from '../components/product'
import test from '../components/test'

const route = (
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} history={hashHistory}>
                <Route path='/hello' component={hello}/>
                <Route path='/test' component={test}/>
            </Route>
        </Router>
    </Provider>
);

export default route


