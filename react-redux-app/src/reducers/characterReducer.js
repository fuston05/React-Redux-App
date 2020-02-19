import {
  GET_CHARACTERS,
  UPDATE_CHARACTERS,
  SET_ERROR
} from '../actions/characterActions';

const initialState= {
  characters: [],
  isLoading: false,
  error: ''
};

export const characterReducer= (state= initialState, action) => {
  switch(action.type){
    case GET_CHARACTERS: 
      return{
        ...state,
        error: '',
        isLoading: true
      }

      case UPDATE_CHARACTERS: 
        return {
          ...state,
          isLoading: false,
          error: '',
          characters: action.payload
        }

      case SET_ERROR:
        return{
          ...state,
          isLoading: false,
          error: action.payload
        }

    default: 
      return state;
  }//end switch
}//end characterReducer