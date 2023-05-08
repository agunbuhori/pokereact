import React from 'react';
import {render} from '@testing-library/react-native';
import Typography from './Typography';

describe('Typography', () => {
  test('renders text with the correct style', () => {
    const {getByText} = render(
      <Typography
        variant="h1"
        weight="bold"
        align="center"
        style={{margin: 10}}>
        Hello, World!
      </Typography>,
    );

    const textElement = getByText('Hello, World!');
    expect(textElement.props.style).toEqual([
      {fontFamily: 'Helvetica'},
      {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#000000',
      },
      {
        margin: 10,
      },
    ]);
  });

  test('renders text with the dark mode style', () => {
    // Mocking the ColorSchemaContext
    jest.mock('@app/contexts/ColorSchemaContext', () => ({
      ColorSchemaContext: {theme: 'dark'},
    }));

    const {getByText} = render(
      <Typography variant="body" weight="regular" align="left">
        Dark Mode Text
      </Typography>,
    );

    const textElement = getByText('Dark Mode Text');

    expect(textElement.props.style).toEqual([
      {fontFamily: 'Helvetica'},
      {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: '#000000',
      },
      undefined,
    ]);
  });
});
