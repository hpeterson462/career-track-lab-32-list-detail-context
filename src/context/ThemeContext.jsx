import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('lightTheme');

  const toggle = () => {
    if (themeMode === 'lightTheme')
      setThemeMode('darkTheme');
    if (themeMode === 'darkTheme')
      setThemeMode('lightTheme');
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
