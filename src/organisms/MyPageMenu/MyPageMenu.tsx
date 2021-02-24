import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';

import MenuItem from '../../atoms/MenuItem';

const MyPageMenu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <MenuItem
        text="개인정보 수정"
        onPress={() => navigation.navigate('AccountInfo')}
      />
      <MenuItem text="개인정보 취급 방침" />
      <MenuItem text="콜리 이용약관" />
      <MenuItem
        text="콜리 계정 탈퇴"
        onPress={() => navigation.navigate('DeleteAccount')}
      />
    </View>
  );
};

export default MyPageMenu;
