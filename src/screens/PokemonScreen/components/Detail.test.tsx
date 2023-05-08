import React from 'react';
import {render} from '@testing-library/react-native';
import Detail from './Detail';

describe('Detail', () => {
  it('renders the detail component with the correct values', () => {
    const pokemon = {
      name: 'Pikachu',
      height: 40,
      weight: 60,
      types: [{type: {name: 'Electric'}}, {type: {name: 'Flying'}}],
    };
    const {getByText} = render(<Detail {...pokemon} />);

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Pikachu')).toBeTruthy();

    expect(getByText('Height')).toBeTruthy();
    expect(getByText('400 cm')).toBeTruthy();

    expect(getByText('Weight')).toBeTruthy();
    expect(getByText('6 kg')).toBeTruthy();

    expect(getByText('Types')).toBeTruthy();
    expect(getByText('Electric, Flying')).toBeTruthy();
  });
});
