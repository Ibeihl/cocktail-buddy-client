import { API_BASE_URL } from '../config';

export const ADD_DRINK_REQUEST = 'ADD_DRINK_REQUEST';
export const addDrinkRequest = () => ({
    type: ADD_DRINK_REQUEST
});

export const ADD_DRINK_SUCCESS = 'ADD_DRINK_SUCCESS';
export const addDrinkSuccess = drink => ({
    type: ADD_DRINK_SUCCESS,
    drink
});

export const ADD_DRINK_ERROR = 'ADD_DRINK_ERROR';
export const addDrinkError = error => ({
    type: ADD_DRINK_ERROR,
    error
});

export const addDrink = newDrink => (dispatch, getState) => {
    dispatch(addDrinkRequest());
    const token = getState().auth.authToken;
    fetch(`${API_BASE_URL}/drinks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            newDrink
        })
    })
        .then(res => res.json())
        .then(drink => dispatch(addDrinkSuccess(drink)))
        .catch(error => dispatch(addDrinkError(error)))
}