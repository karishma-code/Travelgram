import React from 'react';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const isAuthenticated = true;

const RootNavigator = () => {
  return isAuthenticated
    ? <MainTabNavigator />
    : <AuthNavigator />;
};

export default RootNavigator;