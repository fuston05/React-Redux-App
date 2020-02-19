import axios from 'axios';


export const GET_CHARACTERS= 'GET_CHARACTERS';
export const UPDATE_CHARACTERS= 'UPDATE_CHARACTERS';

export const getCharacters= () => dispatch => {
  dispatch({type: GET_CHARACTERS});

  axios
    .get('https://the-one-api.herokuapp.com/v1/character', 
    {
      headers: {Authorization: 'Bearer 9MWooyeh7nsfjwAJMq4A'}
    })
    .then(res => {
      console.log(res.data.docs); //characters array
      dispatch({type: UPDATE_CHARACTERS, payload: res.data.docs});
    })
    .catch(err => {console.log(err);})

}//end getCharacters