import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabs from './MainTabs';
const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainTabs} />
    </Drawer.Navigator>
  );
}
