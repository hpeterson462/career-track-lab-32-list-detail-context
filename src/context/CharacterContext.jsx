import React from 'react';
import { useState } from 'react';

export const CharacterContext = React.createContext();

export const CharacterProvider = ({ children }) => {
  const [characterType] = useState('breakingBad');

  return (
    <CharacterContext.Provider value={{ characterType }}>
      {children}
    </CharacterContext.Provider>
  );
};
