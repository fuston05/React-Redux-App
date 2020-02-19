import {
  GET_CHARACTERS,
  UPDATE_CHARACTERS
} from '../actions/characterActions';

const initialState= {
  characters: [
    {
      name: 'scott',
      race: 'white',
      gender: 'male',
      wiki: 'https://scottfuston.com'
    }
  ],
  isLoading: false
};

export const characterReducer= (state= initialState, action) => {
  switch(action.type){
    case GET_CHARACTERS: 
      return{
        ...state,
        isLoading: true
      }

      case UPDATE_CHARACTERS: 
        return {
          ...state,
          chatacters: action.payload
        }

    default: 
      return state;
  }//end switch
}//end characterReducer