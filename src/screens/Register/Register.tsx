import React from 'react';

import PageTitle from '../../atoms/PageTitle';
import RegisterForm from '../../organisms/RegisterForm/RegisterForm';
import ThemeView from '../../templates/ThemeView';

const Register: React.FC = () => {
  return (
    <ThemeView
      style={{
        flex: 1,
      }}
    >
      <PageTitle style={{ marginBottom: 16 }}>회원가입하기</PageTitle>
      <RegisterForm />
    </ThemeView>
  );
};

export default Register;
