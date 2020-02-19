import React, { useEffect } from 'react';
import axios from 'axios';

//redux
import {connect} from 'react-redux';

//actions
import {getCharacters} from './actions/characterActions';

//components
import CharacterCard from './components/CharacterCard/CharacterCard';

//styles
import './App.css';


// 9MWooyeh7nsfjwAJMq4A api key lord of the rings

//All routes must be prefixed with https://the-one-api.herokuapp.com/v1. Only the /book endpoint is available without authentication.
/**
 * Endpoint	Response	Token required
/book	List of all "The Lord of the Rings" books	no
/book/{id}	Request one specific book	no
/book/{id}/chapter	Request all chapters of one specific book	no
/movie	List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies	yes
/movie/{id}	Request one specific movie	yes
/movie/{id}/quote	Request all movie quotes for one specific movie (only working for the LotR trilogy)	yes
/character	List of characters including metadata like name, gender, realm, race and more	yes
/character/{id}	Request one specific character	yes
/character/{id}/quote	Request all movie quotes of one specific character	yes
/quote	List of all movie quotes	yes
/quote/{id}	Request one specific movie quote	yes
/chapter	List of all book chapters	yes
/chapter/{id}	Request one specific book chapter	yes
 */


function App(props) {

  return (
    <div className="App">
      <h1>Lord of the Rings</h1>
      <button onClick= {props.getCharacters}>Get Characters</button>
      <div className= 'cardCont'>
      <CharacterCard />
      </div>
      
    </div>
  );
}

const mapStateToProps= state =>{
  return {
    isLoading: state.isLoading
  }
}//end mapStateToProps

export default connect(
  mapStateToProps, {
    getCharacters
  })(App);
