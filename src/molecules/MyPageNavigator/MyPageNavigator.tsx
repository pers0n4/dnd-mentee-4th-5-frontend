import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import AccountInfo from '../../screens/AccountInfo';
import MyPageScreen from '../../screens/MyPage';

export type StackParamList = {
  MyPage: undefined;
  AccountInfo: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const MyPageNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
    </Stack.Navigator>
  );
};
export default MyPageNavigator;
