import React from 'react';

import LoginForm from '../../organisms/LoginForm';
import ThemeView from '../../templates/ThemeView';

const Login: React.FC = () => {
  return (
    <ThemeView>
      <LoginForm />
    </ThemeView>
  );
};

export default Login;
