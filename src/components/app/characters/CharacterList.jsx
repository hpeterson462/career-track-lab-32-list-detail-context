import React from 'react';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const characters = useCharacters();

  if (loading)
    return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
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
