import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [lightColor, setLightColor] = useState('#FFFFF');
  const [darkColor, setDarkColor] = useState('#00000');
  const [text, setText] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'lightColor') setLightColor(target.value);
    if (target.name === 'darkColor') setDarkColor(target.value);
  };

  const bucket = {
    lightColor,
    darkColor,
    handleChange
  };

  return (
    <ThemeContext.Provider value={bucket}>
      {children}
    </ThemeContext.Provider>
  );
};
