import {API_BASE_URL} from '../config';

export const SET_SEARCH_TERM_QUERY = 'SET_SEARCH_TERM_QUERY';
export const setSearchTerm = searchTermQuery => ({
    type: SET_SEARCH_TERM_QUERY,
    searchTermQuery
});

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

// export const searchDrink = (searchTerm, criteriaObj ) => dispatch => {
//     dispatch(searchDrinkRequest());
//     fetch(`${API_BASE_URL}/drinks/?search=${searchTerm}`,{
//         method: "GET",
//         body: methodQuery eggWhiteQuery ingredientsQuery
//     })
//       .then(res => res.json())
//       .then(drinks => dispatch(searchDrinkSuccess(drinks)))
//       .catch(error => dispatch(searchDrinkError(error)))                      
// }

export const searchDrink = (searchTermQuery, methodQuery, eggWhiteQuery, ingredientsQuery) => (dispatch, getState) => {
    const token = getState().auth.authToken;
    dispatch(searchDrinkRequest());
    fetch(`${API_BASE_URL}/drinks/?${searchTermQuery}${methodQuery}${eggWhiteQuery}${ingredientsQuery}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(drinks => dispatch(searchDrinkSuccess(drinks)))
      .catch(error => dispatch(searchDrinkError(error)))                      
}



// export const refineResults = (searchTerm, method, ingredients, eggWhite ) => dispatch => {
//     fetch(`${API_BASE_URL}/drinks/?search=${searchTerm}&method=true&ingredients=butts`)
//       .then(res => res.json())
//       .then(drinks => dispatch(searchDrinkSuccess(drinks)))
//       .catch(error => dispatch(searchDrinkError(error)))                      
// }         