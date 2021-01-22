import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>즐겨찾기</Text>
    </View>
  );
};

const ShowcaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>술 진열장</Text>
    </View>
  );
};

const BottomTab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={24} />,
          }}
        />
        <BottomTab.Screen
          name="즐겨찾기"
          component={WishlistScreen}
          options={{
            tabBarIcon: () => <Ionicons name="barcode" size={24} />,
          }}
        />
        <BottomTab.Screen
          name="술 진열장"
          component={ShowcaseScreen}
          options={{
            tabBarIcon: () => <Ionicons name="albums" size={24} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
