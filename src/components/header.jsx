import React from 'react';
import { useToggle } from '';

const Header = () => {
  const toggle = useToggle();

  return (
    <>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

