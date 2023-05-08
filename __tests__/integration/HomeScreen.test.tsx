import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useGetPokemonsQuery} from '@app/redux/slices/pokemonSlice';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';

jest.mock('@app/redux/slices/pokemonSlice');

describe('HomeScreen', () => {
  it('renders the list of Pokemon', async () => {
    const mockedData = {
      results: [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1'},
        {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4'},
        {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7'},
      ],
    };

    useGetPokemonsQuery.mockReturnValue({data: mockedData, isLoading: false});

    const {findByText} = render(<HomeScreen />);

    expect(await findByText('bulbasaur')).toBeDefined();
    expect(await findByText('charmander')).toBeDefined();
    expect(await findByText('squirtle')).toBeDefined();
  });

  it('navigates to Pokemon screen when item is pressed', async () => {
    const mockedData = {
      results: [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1'},
      ],
    };

    useGetPokemonsQuery.mockReturnValue({data: mockedData, isLoading: false});

    const navigation = {
      navigate: jest.fn(),
    };

    const {findByText} = render(<HomeScreen navigation={navigation} />);

    fireEvent.press(await findByText('bulbasaur'));

    expect(navigation.navigate).toHaveBeenCalledWith('Pokemon', {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1',
    });
  });

  it('displays loading indicator while fetching data', () => {
    useGetPokemonsQuery.mockReturnValue({isLoading: true});

    const {queryByTestId} = render(<HomeScreen />);

    expect(queryByTestId('loading-indicator')).toBeDefined();
  });
});
