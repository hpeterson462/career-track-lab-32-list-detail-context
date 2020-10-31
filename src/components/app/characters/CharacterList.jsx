import React, { useContext } from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../../hooks/character';
import styles from './CharacterList.css';
import { ThemeContext } from '../../../context/ThemeContext';
import { useThemeMode } from '../../../hooks/theme';

const CharacterList = () => {
  const characters = useCharacters();
  const themeMode = useThemeMode();

  const characterElements = characters.map(character => (
    <li key={character.char_id}>
      <CharacterItem {...character} />
    </li >
  ));

  const style1 = {
    backgroundColor: '#FFFFFF',
    color: '#AA6C39'
  }

  const style2 = {
    backgroundColor: '#000000',
    color: '#AA6C39'
  }

  return (
    <div data-testid="characters" style={themeMode === 'lightTheme' ? style1 : style2}>
      <ul className={styles.CharacterList} key={themeMode.style1}>
        {characterElements}
      </ul>
    </div>
  );
};

export default CharacterList;
