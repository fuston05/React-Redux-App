import axios from 'axios';

// CONSTANTS
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';
export const SET_ERROR = 'SET_ERROR';

export const getCharacters = () => dispatch => {
  dispatch({ type: GET_CHARACTERS });
  axios
    .get('https://the-one-api.herokuapp.com/v/character',
      {
        headers: { Authorization: 'Bearer 9MWooyeh7nsfjwAJMq4A' }
      })
    .then(res => {
      // console.log('res: ', res.data.docs); //characters array
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push(res.data.docs[i]);
        console.log('data: ', data);
      }
      dispatch({ type: UPDATE_CHARACTERS, payload: data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: SET_ERROR, payload: 'Error getting your characters, please try again...' })
    })

}//end getCharacters