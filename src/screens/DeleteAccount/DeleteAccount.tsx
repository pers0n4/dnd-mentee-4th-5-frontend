import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert, Text, View } from 'react-native';

import { useAuthContext } from '../../../App';
import Button from '../../atoms/Button';
import ThemeView from '../../templates/ThemeView';
import axios from '../../utils/axios';

const DeleteAccount: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [state] = useAuthContext();

  const handleDeleteAccount = () => {
    Alert.alert('', '탈퇴하면 미워잉', [
      {
        text: '취소',
        onPress: () => navigation.goBack(),
      },
      {
        text: '탈퇴',
        onPress: async () => {
          try {
            await axios.delete('/users', {
              headers: {
                'access-token': state.access_token,
              },
            });
          } catch (error) {
            // Alert.alert('', JSON.stringify(error.message));
            navigation.navigate('First');
          }
        },
      },
    ]);
  };

  return (
    <ThemeView>
      <View>
        <Text style={{ color: colors.text, textAlign: 'center' }}>
          술을 찾고 선택하는 즐거움{'\n'}콜리 계정을 탈퇴하시겠습니까?
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 32 }}>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Button
            title="콜리 계속하기"
            onPress={() => navigation.goBack()}
            backgroundColor="#999"
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Button title="계정 탈퇴하기" onPress={handleDeleteAccount} />
        </View>
      </View>
    </ThemeView>
  );
};

export default DeleteAccount;
