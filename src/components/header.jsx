import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { toggle } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default Header;
