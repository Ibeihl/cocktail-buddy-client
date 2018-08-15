import { API_BASE_URL } from '../config';
import {addDrinkError} from './addDrink';

export const EDIT_FAVORITE_SUCCESS = 'EDIT_FAVORITE_SUCCESS';
export const editFavoriteSuccess = drink => ({
    type: EDIT_FAVORITE_SUCCESS,
    drink
});

export const editFavorite = (drinkId, user, favorite) => (dispatch, getState) => {
    const token = getState().auth.authToken;
    fetch(`${API_BASE_URL}/drinks/${drinkId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({user, favorite})
    })
        .then(res => res.json())
        .then(drink => dispatch(editFavoriteSuccess(drink)))
        .catch(error => dispatch(addDrinkError(error)))
}