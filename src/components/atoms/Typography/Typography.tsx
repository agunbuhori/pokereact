import {ColorSchemaContext} from '@app/contexts/ColorSchemaContext';
import React, {PropsWithChildren, useContext} from 'react';
import {Text, StyleSheet, TextStyle, ColorSchemeName} from 'react-native';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
type Weights = 'thin' | 'regular' | 'medium' | 'bold' | 'black';
type Aligns = 'left' | 'center' | 'right';

interface TypographyProps {
  variant?: Variants;
  weight?: Weights;
  align?: Aligns;
  style?: TextStyle;
  testID?: string;
}

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  variant = 'body',
  weight = 'regular',
  align = 'left',
  style,
  children,
  testID,
}) => {
  const colorSchemaContext = useContext(ColorSchemaContext);
  const textStyles = getTypographyStyles(
    variant,
    weight,
    align,
    colorSchemaContext.theme,
  );

  return (
    <Text style={[styles.text, textStyles, style]} testID={testID}>
      {children}
    </Text>
  );
};

const getTypographyStyles = (
  variant: Variants,
  weight: Weights,
  align: Aligns,
  colorScheme: ColorSchemeName,
): TextStyle => {
  const isDarkMode = colorScheme === 'dark';

  const styles: TextStyle = {
    fontSize: getFontSize(variant),
    fontWeight: getFontWeights(weight),
    textAlign: align,
    color: isDarkMode ? '#FFFFFF' : '#000000',
  };

  return styles;
};

const getFontSize = (variant: Variants): number => {
  switch (variant) {
    case 'h1':
      return 24;
    case 'h2':
      return 20;
    case 'h3':
      return 18;
    case 'h4':
      return 16;
    case 'h5':
      return 14;
    case 'h6':
      return 12;
    default:
      return 16;
  }
};

const getFontWeights = (
  weight: Weights,
): '200' | '400' | '500' | '700' | '900' => {
  const fontWeights: {[key: string]: '200' | '400' | '500' | '700' | '900'} = {
    thin: '200',
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
  };

  return fontWeights[weight];
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
  },
});

export default Typography;
