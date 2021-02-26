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
  password_confirm: string;
  user_name: string;
};

type Action =
  | { type: 'user_id'; payload: string }
  | { type: 'password'; payload: string }
  | { type: 'password_confirm'; payload: string }
  | { type: 'user_name'; payload: string };

const initialState: State = {
  user_id: '',
  password: '',
  password_confirm: '',
  user_name: '',
};

const RegisterForm: React.FC = () => {
  const navigation = useNavigation();
  const [, setLoginUser] = useAuthContext();

  const [state, dispatch] = React.useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'user_id':
        return { ...state, user_id: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'password_confirm':
        return { ...state, password_confirm: action.payload };
      case 'user_name':
        return { ...state, user_name: action.payload };
    }
  }, initialState);

  const handleLogin = async () => {
    if (state.password !== state.password_confirm) {
      Alert.alert('', '패스워드가 일치하지 않습니다');
      return;
    }

    try {
      await axios.post('/users', state);
      const response = await axios.post('/auth/token', state);

      setLoginUser({
        user_name: state.user_name,
        description: '',
        access_token: response.data,
      });
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('', JSON.stringify(error.message));
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
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
          <TextField
            label="패스워드 확인"
            onChangeText={(text) =>
              dispatch({ type: 'password_confirm', payload: text })
            }
            type="password"
            value={state.password_confirm}
          />
          <TextField
            label="사용자 이름"
            onChangeText={(text) =>
              dispatch({ type: 'user_name', payload: text })
            }
          />
        </View>
        <View style={{ marginVertical: 32 }}>
          <Button title="콜리 시작하기" onPress={handleLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterForm;
