import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import TimelineScreen from '../screens/Timeline';

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TimelineScreen} />
    </Tab.Navigator>
  );
}
