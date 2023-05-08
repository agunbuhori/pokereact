import React, {FC} from 'react';
import {ActivityIndicator, View, StyleSheet, ViewStyle} from 'react-native';

interface LoadingProps {
  color?: string;
  size?: 'small' | 'large' | number;
  style?: ViewStyle;
}

const Loading: FC<LoadingProps> = ({color = 'gray', size = 'large', style}) => {
  return (
    <View style={[styles.container, style]} testID="loading-container">
      <ActivityIndicator color={color} size={size} testID="loading-indicator" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
