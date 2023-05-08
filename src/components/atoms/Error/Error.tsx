import React from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from '../Typography/Typography';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Typography variant="h5" weight="bold">
        {message}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Error;
