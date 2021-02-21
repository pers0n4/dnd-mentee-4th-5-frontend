import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import First from '../../screens/First';
import Login from '../../screens/Login';
import BottomNavigator from '../BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
