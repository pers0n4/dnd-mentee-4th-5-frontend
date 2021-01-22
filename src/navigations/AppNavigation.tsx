import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from '../screens/Home';
import ShowcaseScreen from '../screens/Showcase';
import WishlistScreen from '../screens/Wishlist';

const Tab = createBottomTabNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={WishlistScreen}
        options={{
          tabBarIcon: () => <Ionicons name="barcode" size={24} />,
        }}
      />
      <Tab.Screen
        name="술 진열장"
        component={ShowcaseScreen}
        options={{
          tabBarIcon: () => <Ionicons name="albums" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
