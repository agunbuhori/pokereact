import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PokemonItem from './PokemonItem';

describe('PokemonItem', () => {
  const mockPokemon = {
    name: 'Pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  };

  it('renders the Pokemon item with correct data', () => {
    const {getByText, getByTestId} = render(
      <PokemonItem {...mockPokemon} onPressed={() => {}} />,
    );

    expect(getByTestId('pokemon-animated-image')).toHaveProp('source', {
      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    });
    expect(getByText('Pikachu')).toBeTruthy();
  });

  it('calls the onPressed function when pressed', () => {
    const mockOnPressed = jest.fn();
    const {getByTestId} = render(
      <PokemonItem {...mockPokemon} onPressed={mockOnPressed} />,
    );

    fireEvent.press(getByTestId('pokemon-item'));

    expect(mockOnPressed).toHaveBeenCalled();
  });
});
