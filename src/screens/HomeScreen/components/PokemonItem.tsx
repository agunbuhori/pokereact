import React, {FC, useEffect, useState} from 'react';
import {Typography} from '@app/components/atoms';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  View,
  useAnimatedValue,
} from 'react-native';
import {PokemonListItem} from '@app/types/Pokemon';
import {getImageByUrl} from '@app/utils/pokemonHelpers';

const PokemonItem: FC<PokemonListItem & {onPressed: () => void}> = props => {
  const [pressed, setPressed] = useState(false);
  const zoomImage = useAnimatedValue(0);

  useEffect(() => {
    if (pressed) {
      Animated.timing(zoomImage, {
        toValue: 1,
        easing: Easing.ease,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(zoomImage, {
        toValue: 0,
        easing: Easing.ease,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [pressed]);

  const {name, url} = props;
  return (
    <Pressable
      onPress={props.onPressed}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      testID="pokemon-item"
      style={styles.pokemon}>
      <Animated.Image
        source={{uri: getImageByUrl(url)}}
        testID="pokemon-animated-image"
        style={[
          styles.image,
          {
            width: zoomImage.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 100],
            }),
            height: zoomImage.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 100],
            }),
          },
        ]}
      />
      <View style={styles.detail}>
        <Typography variant="h2">{name}</Typography>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pokemon: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default PokemonItem;
