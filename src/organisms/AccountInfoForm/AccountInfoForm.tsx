import React from 'react';
import { View } from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../molecules/TextField';

const AccountInfoForm: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextField label="콜리네임" />
        <TextField label="콜리소개" />
      </View>
      <View style={{ marginVertical: 32 }}>
        <Button title="수정하기" onPress={() => ({})} />
      </View>
    </View>
  );
};

export default AccountInfoForm;
