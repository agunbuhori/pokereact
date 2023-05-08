import React, {createContext} from 'react';
import AppNavigator from '@app/navigators/AppNavigator';
import {
  ColorSchemeName,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {DarkModeColors, LightModeColors} from '@app/consts/colors';
import useAsyncStorageState from '@app/hooks/useAsyncStorageState';

interface ColorSchemaProps {
  theme: ColorSchemeName;
  setTheme: (value: ColorSchemeName) => Promise<void>;
}

export const ColorSchemaContext = createContext<ColorSchemaProps>(
  {} as ColorSchemaProps,
);

const ColorSchemaProvider = () => {
  const [theme, setTheme] = useAsyncStorageState<ColorSchemeName>(
    'colorScheme',
    'light',
  );

  return (
    <ColorSchemaContext.Provider value={{theme, setTheme}}>
      <SafeAreaView style={styles.base}>
        <StatusBar backgroundColor={LightModeColors.primary} />
        <AppNavigator />
      </SafeAreaView>
    </ColorSchemaContext.Provider>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: DarkModeColors.primary,
  },
});

export default ColorSchemaProvider;
