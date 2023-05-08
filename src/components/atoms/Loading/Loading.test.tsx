import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from './Loading';

describe('Loading', () => {
  it('renders the loading indicator correctly', () => {
    const {getByTestId} = render(<Loading />);
    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyle = {backgroundColor: 'red'};

    const {getByTestId} = render(<Loading style={customStyle} />);
    const loadingContainer = getByTestId('loading-container');

    expect(loadingContainer).toHaveStyle(customStyle);
  });

  it('applies custom color correctly', () => {
    const customColor = 'blue';

    const {getByTestId} = render(<Loading color={customColor} />);
    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator.props.color).toBe(customColor);
  });

  it('applies custom size correctly', () => {
    const customSize = 'small';

    const {getByTestId} = render(<Loading size={customSize} />);
    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator.props.size).toBe(customSize);
  });
});
