/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@app/redux/store';

import ColorSchemaProvider from '@app/contexts/ColorSchemaContext';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ColorSchemaProvider />
    </Provider>
  );
};

export default App;
