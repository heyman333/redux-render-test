import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import rootReducer from './store';
import Ascreen from './AScreen';
import Bscreen from './BScreen';

const AppNavigator = createStackNavigator({
  AScreen: {
    screen: Ascreen,
  },
  BScreen: {
    screen: Bscreen,
  },
});

const App = createAppContainer(AppNavigator);

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
