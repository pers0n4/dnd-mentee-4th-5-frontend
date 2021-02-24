import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../molecules/TextField';

type State = {
  username: string;
  password: string;
};

type Action =
  | { type: 'username'; payload: string }
  | { type: 'password'; payload: string };

const initialState: State = {
  username: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const navigation = useNavigation();

  const [state, dispatch] = React.useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
    }
  }, initialState);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextField
          label="아이디"
          onChangeText={(text) => dispatch({ type: 'username', payload: text })}
          type="username"
          value={state.username}
        />
        <TextField
          label="패스워드"
          onChangeText={(text) => dispatch({ type: 'password', payload: text })}
          type="password"
          value={state.password}
        />
      </View>
      <View style={{ marginVertical: 32 }}>
        <Button
          title="콜리 시작하기"
          onPress={() => navigation.navigate('Main')}
        />
        <Button
          title="회원가입하기"
          onPress={() => navigation.navigate('Register')}
          backgroundColor="transparent"
        />
      </View>
    </View>
  );
};

export default LoginForm;
