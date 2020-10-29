import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('#FFFFF');

  const toggle = () => {
    setThemeType(oldType => {
      if (oldType === '#FFFFF') return '#00000';
      return '#FFFFF';
    });
  };

  return (
    <ThemeContext.Provider value={{ themeType, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
