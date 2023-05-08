import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './Header';
import {Window} from '@app/consts/sizes';

describe('Header', () => {
  it('renders the header component with the correct image', () => {
    const image =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    const {getByTestId} = render(<Header image={image} />);
    const headerImage = getByTestId('header-image');
    expect(headerImage.props.source.uri).toBe(image);
  });

  it('renders the header component with the correct image dimensions', () => {
    const image =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
    const {getByTestId} = render(<Header image={image} />);
    const headerImage = getByTestId('header-image');
    expect(headerImage.props.style).toEqual(
      expect.objectContaining({
        width: Window.width / 1.5,
        height: Window.width / 1.5,
      }),
    );
  });
});
