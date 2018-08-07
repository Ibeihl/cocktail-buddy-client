import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { drinkReducer } from './reducers/drink';

export default createStore(
    drinkReducer,
    applyMiddleware(thunk)
);
