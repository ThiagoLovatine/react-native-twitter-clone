import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/store';
import Reactotron from 'reactotron-react-native';

import AppNavigator from './src/navigation';

import {NavigationContainer} from '@react-navigation/native';

import moment from 'moment/min/moment-with-locales';
moment.locale('pt-BR');

if (__DEV__) {
  import('./src/store/reactotron').then(() =>
    Reactotron.log('Reactotron Configured'),
  );
}
export default function app() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
