import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert, ScrollView, View } from 'react-native';

import { useAuthContext } from '../../../App';
import Button from '../../atoms/Button';
import TextField from '../../molecules/TextField';
import axios from '../../utils/axios';

type State = {
  user_id: string;
  password: string;
};

type Action =
  | { type: 'user_id'; payload: string }
  | { type: 'password'; payload: string };

const initialState: State = {
  user_id: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const navigation = useNavigation();

  const [, setLoginUser] = useAuthContext();

  const [state, dispatch] = React.useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'user_id':
        return { ...state, user_id: action.payload };
      case 'password':
        return { ...state, password: action.payload };
    }
  }, initialState);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/token', state);
      setLoginUser({
        user_name: 'test',
        description: '',
        access_token: response.data.access_token,
      });
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('', error.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginBottom: 'auto' }}>
          <TextField
            label="아이디"
            onChangeText={(text) =>
              dispatch({ type: 'user_id', payload: text })
            }
            type="username"
            value={state.user_id}
          />
          <TextField
            label="패스워드"
            onChangeText={(text) =>
              dispatch({ type: 'password', payload: text })
            }
            type="password"
            value={state.password}
          />
        </View>
        <View style={{ marginVertical: 32 }}>
          <Button title="콜리 시작하기" onPress={handleLogin} />
          <Button
            title="회원가입하기"
            onPress={() => navigation.navigate('Register')}
            backgroundColor="transparent"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
