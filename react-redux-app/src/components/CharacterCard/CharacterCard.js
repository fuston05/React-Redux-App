import React from 'react';

//redux
import { connect } from 'react-redux';

//styles
import './CharacterCardStyles.scss'

const CharacterCard = (props) => {
  return (
    <>
      {props.characters.map(character => {
        return (
          <div className= 'characterCard'>
            <h1>{character.name}</h1>
            <p>Race: {character.race}</p>
            <p>Gender: {character.gender}</p>
            <a 
              href= {character.wiki} 
              rel= 'noopener noreferrer' 
              target= '_blank' >More Information</a>
          </div>
        )
      })}
    </>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}//end mapStateToProps

export default connect(
  mapStateToProps,
  {}
)(CharacterCard);