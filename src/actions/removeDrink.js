import { API_BASE_URL } from '../config';

export const REMOVE_DRINK_SUCCESS = 'REMOVE_DRINK_SUCCESS';
export const removeDrinkSuccess = () => ({
    type: REMOVE_DRINK_SUCCESS,
});

export const REMOVE_DRINK_ERROR = 'REMOVE_DRINK_ERROR';
export const removeDrinkError = error => ({
    type: REMOVE_DRINK_ERROR,
    error
});

export const removeDrink = drinkId => (dispatch, getState) => {
    const token = getState().auth.authToken;
    fetch(`${API_BASE_URL}/drinks/${drinkId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        })
        .then(res => res.json())
        .then(() => dispatch(removeDrinkSuccess()))
        .catch(error => dispatch(removeDrinkError(error)))
}