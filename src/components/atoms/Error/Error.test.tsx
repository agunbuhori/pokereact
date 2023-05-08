import React from 'react';
import {render} from '@testing-library/react-native';
import Error from './Error';

describe('Error component', () => {
  it('renders the error message', () => {
    const errorMessage = 'Something went wrong';
    const {getByText} = render(<Error message={errorMessage} />);
    const errorTextElement = getByText(errorMessage);
    expect(errorTextElement).toBeDefined();
  });
});
