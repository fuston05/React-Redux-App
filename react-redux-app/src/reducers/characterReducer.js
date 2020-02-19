import {
  GET_CHARACTERS,
  UPDATE_CHARACTERS
} from '../actions/characterActions';

const initialState= {
  characters: [],
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
      console.log('characters from state: ', state.characters);
        return {
          ...state,
          isLoading: false,
          characters: action.payload
        }

    default: 
      return state;
  }//end switch
}//end characterReducer