export const getApi = async () => {
  const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const json = await res.json();

  if (!res.ok) throw 'Unable to find';

  return json.results.map(character => ({
    id: character.char_id,
    name: character.name,
    image: character.img
  }));
};
