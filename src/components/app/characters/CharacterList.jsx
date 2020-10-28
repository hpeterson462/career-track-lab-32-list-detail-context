import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../../hooks/character';

const CharacterList = () => {
  const characters = useCharacters();
  const loading = useCharacters();

  if (loading)
    return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.char_id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
