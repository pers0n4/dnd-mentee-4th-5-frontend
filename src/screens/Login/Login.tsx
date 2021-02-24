import React from 'react';
import { Image } from 'react-native';

import LoginForm from '../../organisms/LoginForm';
import ThemeView from '../../templates/ThemeView';

const Login: React.FC = () => {
  return (
    <ThemeView>
      <Image
        source={require('../../../assets/app/logo.png')}
        style={{ alignSelf: 'center', marginVertical: 32 }}
      />
      <LoginForm />
    </ThemeView>
  );
};

export default Login;
