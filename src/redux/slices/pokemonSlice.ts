import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Pokemon, PokemonListResponse} from '@app/types/Pokemon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {POKEMON_BASE_URL} from '@env';

export const pokemonSlice = createApi({
  reducerPath: 'pokemonSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: POKEMON_BASE_URL,
  }),
  endpoints: builder => ({
    getPokemons: builder.query<PokemonListResponse, undefined>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
  cache: {
    serializeQuery: query => JSON.stringify(query),
    deserializeQuery: serializedQuery => JSON.parse(serializedQuery),
    serializeResponse: response => JSON.stringify(response),
    deserializeResponse: serializedResponse => JSON.parse(serializedResponse),
    storage: AsyncStorage,
  },
});

export const {useGetPokemonsQuery, useGetPokemonByNameQuery} = pokemonSlice;
