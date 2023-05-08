import React, {FC} from 'react';
import RootStackParamList from '@app/types/RootStackParamList';
import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView} from 'react-native';
import {getImageByUrl} from '@app/utils/pokemonHelpers';
import useNavigationTitle from '@app/hooks/useNavigationTitle';
import {useGetPokemonByNameQuery} from '@app/redux/slices/pokemonSlice';
import {Error, Loading} from '@app/components/atoms';
import Header from './components/Header';
import Detail from './components/Detail';
import {ucFirst} from '@app/utils/stringHelpers';

const PokemonScreen: FC<StackScreenProps<RootStackParamList, 'Pokemon'>> = ({
  route,
}) => {
  useNavigationTitle(ucFirst(route.params.name));
  const {data, isLoading, isError} = useGetPokemonByNameQuery(
    route.params.name,
  );

  if (isError) {
    return <Error message="Failed to fetch pokemon detail" />;
  }

  return (
    <ScrollView testID="pokemon-screen">
      <Header image={getImageByUrl(route.params.url)} />
      {isLoading && <Loading />}
      {data && <Detail {...data} />}
    </ScrollView>
  );
};

export default PokemonScreen;
