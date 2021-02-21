import styled from '@emotion/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { main, myPage, search, wishList } from '../../../assets/images';
import MainScreen from '../../screens/Main';
import MyPageScreen from '../../screens/MyPage';
import SearchScreen from '../../screens/Search';
import WishlistScreen from '../../screens/Wishlist';

const Icon = styled.Image({
  width: 23,
  height: 23,
  resizeMode: 'contain',
});

const Tab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'rgb(246, 123, 115)',
        activeBackgroundColor: 'black',
        inactiveTintColor: 'white',
        inactiveBackgroundColor: 'black',
      }}
    >
      <Tab.Screen
        name="메인"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source={main} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source={wishList} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source={search} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source={myPage} style={{ tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
