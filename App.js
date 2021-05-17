import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
