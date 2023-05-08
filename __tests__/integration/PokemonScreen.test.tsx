import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import PokemonScreen from '@app/screens/PokemonScreen/PokemonScreen';
import {Provider} from 'react-redux';
import {store} from '@app/redux/store';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('PokemonScreen', () => {
  beforeEach(() => {
    useNavigation.mockReturnValue({
      setOptions: jest.fn(),
    });
  });

  afterEach(() => {
    useNavigation.mockReset();
  });

  it('renders a loading indicator while fetching data', () => {
    const route = {
      params: {name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
    };

    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <PokemonScreen route={route} />
        </NavigationContainer>
      </Provider>,
    );

    // Test your assertions here
    // For example:
    const pokemonScreen = getByTestId('pokemon-screen');
    expect(pokemonScreen).toBeTruthy();
  });
});
