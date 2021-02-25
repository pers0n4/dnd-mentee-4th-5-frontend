import { useTheme } from '@emotion/react';
import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../atoms/Button';
import ThemeView from '../../templates/ThemeView';

const DeleteAccount: React.FC = () => {
  const { colors } = useTheme();

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
            onPress={() => ({})}
            backgroundColor="#999"
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Button title="계정 탈퇴하기" onPress={() => ({})} />
        </View>
      </View>
    </ThemeView>
  );
};

export default DeleteAccount;
