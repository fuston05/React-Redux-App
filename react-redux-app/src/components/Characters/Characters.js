import React from 'react';

//redux
import { connect } from 'react-redux';

//styles
import './CharactersStyles.scss'

const Characters = (props) => {
  return (
    <>
      {props.characters.map(character => {
        console.log('character-from characters: ',character);
        return (
          <div className= 'card'>
          <h1>{character.name}</h1>
          <p>Race: {character.race}</p>
          <p>Gender: {character.gender}</p>
          <a
            rel= 'noopener noreferrer'
            target= '_blank' 
            href= {character.wikiUrl}>
            More Info
          </a>
        </div>
        )//end map return
      })}
    </>
  )//end main return
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}//end mapStateToProps

export default connect(
  mapStateToProps,
  {}
)(Characters);