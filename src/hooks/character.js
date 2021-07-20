import { useEffect, useState } from 'react';
import { getApi } from '../services/api.js';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApi()
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, []);

  return characters
};
