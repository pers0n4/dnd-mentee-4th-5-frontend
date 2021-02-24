import styled from '@emotion/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import FavoriteScreen from '../../screens/Favorite';
import HomeScreen from '../../screens/Home';
import SearchScreen from '../../screens/Search';
import MyPageNavigator from '../MyPageNavigator';

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
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              source={require('../../../assets/navigation/home.svg')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              source={require('../../../assets/navigation/favorite.svg')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              source={require('../../../assets/navigation/search.svg')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              source={require('../../../assets/navigation/mypage.svg')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
