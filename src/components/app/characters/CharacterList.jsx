import React, { useContext } from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../../hooks/character';
import styles from './CharacterList.css';
import { ThemeContext } from '../../../context/ThemeContext';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.char_id}>
      <CharacterItem {...character} />
    </li >
  ));

  const { lightTheme } = useContext(ThemeContext);
  console.log(lightTheme, 'heelllooo');

  const style = {
    backgroundColor: lightTheme
  }

  return (
    <div style={style}>
      <ul data-testid="characters" className={styles.CharacterList}>
        {characterElements}
      </ul>
    </div>
  );
};

export default CharacterList;
