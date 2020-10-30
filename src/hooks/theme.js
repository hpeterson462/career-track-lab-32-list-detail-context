import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemeMode = () => {
  const { themeMode } = useContext(ThemeContext);

  return themeMode;
};
