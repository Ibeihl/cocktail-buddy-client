import {
    SEARCH_DRINK_ERROR,
    SEARCH_DRINK_REQUEST,
    SEARCH_DRINK_SUCCESS
} from '../actions/drink';
import { TOGGLE_ADVANCED_SEARCH } from '../actions/advanced-search'
import {
    CHECKED_METHOD_BOX,
    CHECKED_EGGWHITE_BOX,
    CHECKED_INGREDIENT_BOX
} from '../actions/search-criteria'
import {
    TOGGLE_ADD_DRINK
} from '../actions/toggle-add';

// import { 
//     ADD_DRINK_ERROR, 
//     ADD_DRINK_REQUEST, 
//     ADD_DRINK_SUCCESS } from '../actions/addDrink';

const initialState = {
    addDrink: false,
    searchTermQuery: '',
    advancedSearch: false,
    drinks: [],
    searchIngredients: [],
    searchMethod: null,
    eggWhite: null,
    loading: false,
    error: null,
};

export function drinkReducer(state = initialState, action) {
    if (action.type === TOGGLE_ADD_DRINK) {
        console.log(state.addDrink);
        return Object.assign({}, state, {
            addDrink: !state.addDrink
        })
    }
    if (action.type === CHECKED_METHOD_BOX) {
        return Object.assign({}, state, {
            searchMethod: action.method
        })
    }
    else if (action.type === CHECKED_EGGWHITE_BOX) {
        return Object.assign({}, state, {
            eggWhite: action.eggWhite
        })
    }
    else if (action.type === CHECKED_INGREDIENT_BOX) {
        return Object.assign({}, state, {
            ingredient: [...state.searchIngredients, action.ingredient]
        })
    }
    else if (action.type === TOGGLE_ADVANCED_SEARCH) {
        return Object.assign({}, state, {
            advancedSearch: !state.advancedSearch
        })
    }
    else if (action.type === SEARCH_DRINK_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
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
