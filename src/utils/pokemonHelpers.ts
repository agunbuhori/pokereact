export const getPokemonNumber = (url: string): number => {
  const regex = /\/pokemon\/(\d+)\//;
  const match = url.match(regex);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return -1;
};

export const getImageByUrl = (url: string) => {
  const number = getPokemonNumber(url);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};
