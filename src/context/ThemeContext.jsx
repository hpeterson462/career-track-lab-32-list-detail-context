import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState('#FFFFFF');

  const toggle = () => {
    if (lightTheme === '#FFFFFF')
      return setLightTheme('#000000')
    if (lightTheme === '#000000')
      return setLightTheme('#FFFFFF')
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
