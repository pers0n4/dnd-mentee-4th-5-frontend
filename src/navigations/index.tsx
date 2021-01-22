import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppNavigation from './AppNavigation';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
