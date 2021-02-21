import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '../../screens/Login';
import BottomNavigator from '../BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
