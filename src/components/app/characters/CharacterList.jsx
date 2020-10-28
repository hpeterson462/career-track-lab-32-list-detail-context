import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../../hooks/character';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    < li key={character.char_id} >
      <CharacterItem {...character} />
    </li >
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

export default CharacterList;
