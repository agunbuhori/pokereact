import {dmToCm, hgToKg} from './mathHelpers';
import {getImageByUrl, getPokemonNumber} from './pokemonHelpers';

describe('getPokemonNumber', () => {
  it('should extract the Pokémon number from the URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/42/';
    const result = getPokemonNumber(url);
    expect(result).toBe(42);
  });

  it('should return -1 for an invalid URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/invalid/';
    const result = getPokemonNumber(url);
    expect(result).toBe(-1);
  });
});

describe('getImageByUrl', () => {
  it('should return the correct image URL based on the Pokemon URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/42/';
    const result = getImageByUrl(url);
    expect(result).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    );
  });

  it('should handle an invalid URL and return the default image URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/invalid/';
    const result = getImageByUrl(url);
    expect(result).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/-1.png',
    );
  });
});

describe('mathHelpers', () => {
  describe('dmToCm', () => {
    it('converts decimeters to centimeters', () => {
      const decimeters = 5;
      const expected = '50 cm';
      const result = dmToCm(decimeters);
      expect(result).toBe(expected);
    });
  });

  describe('hgToKg', () => {
    it('converts hectograms to kilograms', () => {
      const hectograms = 150;
      const expected = '15 kg';
      const result = hgToKg(hectograms);
      expect(result).toBe(expected);
    });
  });
});
