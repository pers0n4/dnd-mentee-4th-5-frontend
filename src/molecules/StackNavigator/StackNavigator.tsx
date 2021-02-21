import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import First from '../../screens/First';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import BottomNavigator from '../BottomNavigator';

export type StackParamList = {
  First: undefined;
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: '', animationEnabled: false }}
    >
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
