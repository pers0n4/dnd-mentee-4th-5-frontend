import { ThemeProvider } from '@emotion/react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

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

type User = {
  user_name: string;
  description: string;
  access_token: string;
};

const initialState: User = {
  user_name: '',
  description: '',
  access_token: '',
};

const AuthContext = React.createContext<
  [user: User, dispatch: React.Dispatch<React.SetStateAction<User>>]
>([initialState, () => ({})]);

const App: React.FC = () => {
  const [state, dispatch] = React.useState(initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;

export const useAuthContext = () => React.useContext(AuthContext);
