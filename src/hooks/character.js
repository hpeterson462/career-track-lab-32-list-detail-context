import { useEffect, useState } from 'react';
import { getApi } from '../services/api.js';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApi()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};
