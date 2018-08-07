import {
    SEARCH_DRINK_ERROR,
    SEARCH_DRINK_REQUEST,
    SEARCH_DRINK_SUCCESS
} from '../actions/drink';

const initialState = {
    drinks: [],
    loading: false,
    error: null,
};

export function drinkReducer(state = initialState, action) {
    if (action.type === SEARCH_DRINK_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            searchTerm: action.searchTerm
        })
    }
    else if (action.type === SEARCH_DRINK_SUCCESS) {
        return Object.assign({}, state, {
            drinks: action.drinks,
            loading: false,
            error: null
        })
    }
    else if (action.type === SEARCH_DRINK_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}
