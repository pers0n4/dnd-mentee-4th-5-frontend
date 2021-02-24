import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, View } from 'react-native';

import Button from '../../atoms/Button';
import { StackParamList } from '../../molecules/StackNavigator';
import ThemeView from '../../templates/ThemeView';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'First'>;
}

const First: React.FC<Props> = ({ navigation }) => {
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
        <Button
          title="콜리 시작하기"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="회원가입하기"
          onPress={() => navigation.navigate('Register')}
          backgroundColor="transparent"
        />
      </View>
    </ThemeView>
  );
};

export default First;
