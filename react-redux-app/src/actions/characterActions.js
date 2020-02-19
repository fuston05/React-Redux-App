import axios from 'axios';

// CONSTANTS
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';
export const SET_ERROR = 'SET_ERROR';

export const getCharacters = () => dispatch => {
  dispatch({ type: GET_CHARACTERS });
  axios
    .get('https://the-one-api.herokuapp.com/v1/character',
      {
        headers: { Authorization: 'Bearer 9MWooyeh7nsfjwAJMq4A' }
      })
    .then(res => {
      let data = [];
      for (let i = 0; i < 50; i++) {
        data.push(res.data.docs[i]);
      }
      dispatch({ type: UPDATE_CHARACTERS, payload: data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: 'Error getting your characters, please try again...' })
    })``
}//end getCharacters