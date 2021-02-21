import { ThemeProvider } from '@emotion/react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BottomNavigator from './src/molecules/BottomNavigator';
import StackNavigator from './src/molecules/StackNavigator';

declare module '@emotion/react' {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      card: string;
      text: string;
      border: string;
    };
  }
}

const theme = {
  colors: {
    ...DarkTheme.colors,
    primary: '#ff8077',
    secondary: '#95a4d6',
    background: 'rgb(28, 28, 30)',
    card: 'rgb(215, 169, 173)',
    text: '#fff',
    border: 'rgb(87, 82, 95)',
  },
};

const navigationTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...theme,
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        {/* <BottomNavigator /> */}
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
