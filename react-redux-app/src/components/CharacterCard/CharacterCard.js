import React from 'react';

//styles
import './CharacterCardStyles.scss'

const CharacterCard = ({character}) => {
  return (
    <div className= 'card'>
      <h1>{character.name}</h1>
      <p>Race: {character.race}</p>
      <p>Gender: {character.gender}</p>
      <p>More Info: {character.wikiUrl}</p>
    </div>
  )
}

export default CharacterCard;