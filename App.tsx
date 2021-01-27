import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BottomNavigator from './src/molecules/BottomNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
