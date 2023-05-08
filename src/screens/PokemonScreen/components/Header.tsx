import {Window} from '@app/consts/sizes';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface HeaderProps {
  image: string;
}
const Header: FC<HeaderProps> = ({image}) => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={{uri: image}} testID="header-image" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Window.width / 1.5,
    height: Window.width / 1.5,
  },
});

export default Header;
