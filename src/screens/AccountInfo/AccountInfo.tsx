import React from 'react';

import AccountInfoForm from '../../organisms/AccountInfoForm/AccountInfoForm';
import ThemeView from '../../templates/ThemeView';

const AccountInfo: React.FC = () => {
  return (
    <ThemeView>
      <AccountInfoForm />
    </ThemeView>
  );
};

export default AccountInfo;
