import React from 'react';
import { useThemeToggle } from '../hooks/theme';

const Header = () => {
  const toggle = useThemeToggle();

  return (
    <>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default Header;
