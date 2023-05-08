import React, {createRef, useContext} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import RootStackParamList from '@app/types/RootStackParamList';
import {ColorSchemaContext} from '@app/contexts/ColorSchemaContext';
import {DarkTheme, DefaultTheme} from '@app/consts/themes';

import HomeScreen from '@app/screens/HomeScreen/HomeScreen';
import PokemonScreen from '@app/screens/PokemonScreen/PokemonScreen';
import {LightModeColors} from '@app/consts/colors';

const Stack = createStackNavigator<RootStackParamList>();

/**
 * For testing purpose
 */
export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

const AppNavigator = () => {
  const colorSchemaContext = useContext(ColorSchemaContext);
  const options: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: LightModeColors.primary,
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorSchemaContext.theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={options}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
