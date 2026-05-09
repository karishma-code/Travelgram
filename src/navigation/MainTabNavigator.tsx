import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
      />

      <Tab.Screen
        name="Trips"
        component={TripsScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;