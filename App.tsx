import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BottomNavigator from './src/molecules/BottomNavigator';

declare module '@emotion/react' {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      background: string;
    };
  }
}

const theme = {
  colors: {
    primary: 'rgb(255, 128, 119)',
    secondary: 'rgb(215, 169, 174)',
    accent: 'rgb(149, 164, 214)',
    text: '#fff',
    background: '#000',
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
