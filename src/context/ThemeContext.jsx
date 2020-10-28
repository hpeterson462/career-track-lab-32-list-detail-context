import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('Light');

  const toggle = () => {
    setThemeType(oldType => {
      if (oldType === 'Light') return 'Dark';
      return 'Light';
    });
  };

  // const handleChange = ({ target }) => {
  //   if (target.name === 'lightColor') setLightColor(target.value);
  //   if (target.name === 'darkColor') setDarkColor(target.value);
  // };

  // const bucket = {
  //   lightColor,
  //   darkColor,
  //   handleChange
  // };

  return (
    <ThemeContext.Provider value={{ themeType, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
