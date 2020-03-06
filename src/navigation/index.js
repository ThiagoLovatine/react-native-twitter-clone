import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '../screens/Loading';
import MainDrawer from './MainDrawer';
import AuthLoginScreen from '../screens/AuthLogin';

const Stack = createStackNavigator();

const navigation = function() {
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen name="MainNavigation" component={MainDrawer} />
      <Stack.Screen
        name="Login"
        component={AuthLoginScreen}
        options={{
          header: () => {
            return null;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default navigation;
