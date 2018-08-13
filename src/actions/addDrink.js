import { API_BASE_URL } from '../config';

export const ADD_DRINK_REQUEST = 'ADD_DRINK_REQUEST';
export const addDrinkRequest = () => ({
    type: ADD_DRINK_REQUEST
});

export const ADD_DRINK_SUCCESS = 'ADD_DRINK_SUCCESS';
export const addDrinkSuccess = drinks => ({
    type: ADD_DRINK_SUCCESS,
    drinks
});

export const ADD_DRINK_ERROR = 'ADD_DRINK_ERROR';
export const addDrinkError = error => ({
    type: ADD_DRINK_ERROR,
    error
});

export const addDrink = newDrink => dispatch => {
    dispatch(addDrinkRequest());
    fetch(`${API_BASE_URL}/drinks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newDrink
        })
    })
        .then(res => res.json())
        .then(drinks => dispatch(addDrinkSuccess(drinks)))
        .catch(error => dispatch(addDrinkError(error)))
}