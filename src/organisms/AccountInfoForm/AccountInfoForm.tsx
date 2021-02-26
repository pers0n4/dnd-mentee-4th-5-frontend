import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';

import { useAuthContext } from '../../../App';
import Button from '../../atoms/Button';
import TextField from '../../molecules/TextField';

const AccountInfoForm: React.FC = () => {
  const navigtaion = useNavigation();
  const [state, dispatch] = useAuthContext();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextField
          label="콜리네임"
          value={state.user_name}
          onChangeText={(text) =>
            dispatch((prev) => ({ ...prev, user_name: text }))
          }
        />
        <TextField
          label="콜리소개"
          value={state.description}
          onChangeText={(text) =>
            dispatch((prev) => ({ ...prev, description: text }))
          }
        />
      </View>
      <View style={{ marginVertical: 32 }}>
        <Button title="수정하기" onPress={() => navigtaion.goBack()} />
      </View>
    </View>
  );
};

export default AccountInfoForm;
