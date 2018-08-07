import {API_BASE_URL} from '../config';

export const SEARCH_DRINK_REQUEST = 'SEARCH_DRINK_REQUEST';
export const searchDrinkRequest = () => ({
    type: SEARCH_DRINK_REQUEST
});

export const SEARCH_DRINK_SUCCESS = 'SEARCH_DRINK_SUCCESS';
export const searchDrinkSuccess = drinks => ({
    type: SEARCH_DRINK_SUCCESS,
    drinks
});

export const SEARCH_DRINK_ERROR = 'SEARCH_DRINK_ERROR';
export const searchDrinkError = error => ({
    type: SEARCH_DRINK_ERROR,
    error
});

export const searchDrink = searchTerm => dispatch => {
    dispatch(searchDrinkRequest());
    fetch(`${API_BASE_URL}/drinks/?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => data.map(drink => drink.name)) 
      .then(names => dispatch(searchDrinkSuccess(names)))
      .catch(error => dispatch(searchDrinkError(error)))                      
}         