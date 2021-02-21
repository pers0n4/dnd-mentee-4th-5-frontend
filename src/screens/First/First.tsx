import React from 'react';
import { Alert, Image, View } from 'react-native';

import Button from '../../atoms/Button';
import ThemeView from '../../templates/ThemeView';

const First: React.FC = () => {
  return (
    <ThemeView
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../../assets/app/logo.png')}
          style={{ alignSelf: 'center' }}
        />
        <Image
          source={require('../../../assets/app/slogan.png')}
          style={{ alignSelf: 'center', marginTop: 24 }}
        />
      </View>
      <View
        style={{
          width: '100%',
          marginVertical: 32,
          justifyContent: 'space-between',
        }}
      >
        <Button title="콜리 시작하기" onPress={() => Alert.alert('시작하기')} />
        <Button
          title="회원가입하기"
          onPress={() => Alert.alert('회원가입')}
          backgroundColor="transparent"
        />
      </View>
    </ThemeView>
  );
};

export default First;
