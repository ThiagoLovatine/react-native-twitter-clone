import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '../screens/Loading';
import MainDrawer from './MainDrawer';
import AuthLoginScreen from '../screens/AuthLogin';
import AuthRegisterScreen from '../screens/AuthRegister';
import AuthForgotPasswordScreen from '../screens/AuthForgotPassword';
import AuthConfirmationScreen from '../screens/AuthConfirmation';
import AuthResetPasswordScreen from '../screens/AuthResetPassword';

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
      <Stack.Screen
        name="AuthRegister"
        component={AuthRegisterScreen}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="AuthForgotPassword"
        component={AuthForgotPasswordScreen}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="AuthResetPassword"
        component={AuthResetPasswordScreen}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="AuthConfirmation"
        component={AuthConfirmationScreen}
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
