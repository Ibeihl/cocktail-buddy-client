import {
    SEARCH_DRINK_ERROR,
    SEARCH_DRINK_REQUEST,
    SEARCH_DRINK_SUCCESS,
    CLEAR_DRINKS
} from '../actions/drink';
import {
    TOGGLE_ADD_DRINK
} from '../actions/toggle-add';
import { ADD_DRINK_SUCCESS } from '../actions/addDrink';
import { EDIT_FAVORITE_SUCCESS } from '../actions/favorites';
import { SET_DISPLAY_CAT } from '../actions/set-display';

const initialState = {
    addDrink: false,
    searchTerm: '',
    drinks: [],
    searchIngredients: [],
    searchMethod: null,
    eggWhite: null,
    loading: false,
    error: null,
    displayCat: 'all'
};

export function drinkReducer(state = initialState, action) {
    if (action.type === SET_DISPLAY_CAT) {
        return Object.assign({}, state, {
            displayCat: action.displayCat
        })
    }

    else if (action.type === EDIT_FAVORITE_SUCCESS) {
        return Object.assign({}, state, {
            drinks: state.drinks.map((drink) => {
                if(drink.id === action.drink.id){
                    return action.drink;
                } else {
                    return drink;
                }
            })
        })
    }
    else if (action.type === ADD_DRINK_SUCCESS) {
        return Object.assign({}, state, {
            drinks: [...this.state.drinks, action.drink]
        })
    }
    else if (action.type === CLEAR_DRINKS) {
        return Object.assign({}, state, {
            drinks: []
        })
    }
    else if (action.type === TOGGLE_ADD_DRINK) {
        return Object.assign({}, state, {
            addDrink: !state.addDrink
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
