import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemeType = () => {
  const { themeType } = useContext(ThemeContext);

  return themeType;
};

export const useThemeToggle = () => {
  const { toggle } = useContext(ThemeContext);

  return toggle;
};
