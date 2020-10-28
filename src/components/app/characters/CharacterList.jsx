import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../../hooks/character';
import styles from './CharacterList.css';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.char_id}>
      <CharacterItem {...character} />
    </li >
  ));

  return (
    <ul data-testid="characters" className={styles.CharacterList}>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
