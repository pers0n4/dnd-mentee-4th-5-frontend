import React from 'react';

import LoginForm from '../../organisms/LoginForm';
import ThemeView from '../../templates/ThemeView';

const Login: React.FC = () => {
  return (
    <ThemeView
      style={{
        flex: 1,
      }}
    >
      <LoginForm />
    </ThemeView>
  );
};

export default Login;
