import React, {FC, useCallback, useContext, useEffect} from 'react';
import {FlatList, Pressable, StyleSheet} from 'react-native';
import {useGetPokemonsQuery} from '@app/redux/slices/pokemonSlice';
import {PokemonListItem} from '@app/types/Pokemon';
import {Error, Loading, Typography} from '@app/components/atoms';
import {StackScreenProps} from '@react-navigation/stack';
import RootStackParamList from '@app/types/RootStackParamList';
import PokemonItem from './components/PokemonItem';
import {ColorSchemaContext} from '@app/contexts/ColorSchemaContext';

const HomeScreen: FC<StackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  const colorSchemaContext = useContext(ColorSchemaContext);
  const {data, isLoading, isError} = useGetPokemonsQuery(undefined);

  const onItemPressed = (item: PokemonListItem) => {
    navigation.navigate('Pokemon', item);
  };

  const keyExtractor = useCallback((item: PokemonListItem) => item.name, []);
  const renderItem = useCallback(
    ({item}: {item: PokemonListItem}) => (
      <PokemonItem {...item} onPressed={() => onItemPressed(item)} />
    ),
    [],
  );
  const renderHeader = () => {
    return (
      <Pressable
        style={styles.themeSwitcher}
        onPress={() =>
          colorSchemaContext.setTheme(
            colorSchemaContext.theme === 'dark' ? 'light' : 'dark',
          )
        }>
        <Typography>{colorSchemaContext.theme?.toUpperCase()} MODE</Typography>
      </Pressable>
    );
  };

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error message="Network error" />;
  }

  return (
    <FlatList
      data={data?.results}
      ListHeaderComponent={renderHeader}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.flatList}
      initialNumToRender={10}
      windowSize={5}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    // backgroundColor: 'white',
  },
  themeSwitcher: {
    padding: 10,
  },
});

export default HomeScreen;
