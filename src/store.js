import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { drinkReducer } from './reducers/drink';
import authReducer from './reducers/auth';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

export default createStore(
    combineReducers({
        form: formReducer,
        drink: drinkReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
);

// const authToken = loadAuthToken();
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

// export default store;