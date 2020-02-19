import React from 'react';

//redux
import { connect } from 'react-redux';

//styles
import './CharactersStyles.scss'
import CharacterCard from '../CharacterCard/CharacterCard';

const Characters = (props) => {
  return (
    <>
      {props.characters.map(character => {
        console.log('character-from characters: ',character);
        return (
          <CharacterCard 
            key= {character.id}
            character= { {
              name: character.name,
              race: character.race,
              gender: character.gender,
              wiki: character.wikiUrl
            } }
          />
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
)(Characters);