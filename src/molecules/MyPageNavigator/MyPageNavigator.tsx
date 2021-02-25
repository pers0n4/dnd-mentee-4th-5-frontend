import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import AccountInfo from '../../screens/AccountInfo';
import DeleteAccount from '../../screens/DeleteAccount';
import MyPageScreen from '../../screens/MyPage';

export type StackParamList = {
  MyPage: undefined;
  AccountInfo: undefined;
  DeleteAccount: undefined;
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
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
    </Stack.Navigator>
  );
};
export default MyPageNavigator;
