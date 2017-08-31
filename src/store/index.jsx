import {combineReducers, createStore} from 'redux'
import product from './reducers/product'

let reducers = combineReducers({
    product
});

let store = createStore(reducers);

export default store