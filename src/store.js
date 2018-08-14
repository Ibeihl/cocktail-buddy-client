import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { drinkReducer } from './reducers/drink';
import authReducer from './reducers/auth';

export default createStore(
    combineReducers({
        form: formReducer,
        drink: drinkReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
);
