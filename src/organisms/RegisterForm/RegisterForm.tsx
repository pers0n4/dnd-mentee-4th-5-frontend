import React from 'react';
import { Alert, View } from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../molecules/TextField';

type State = {
  username: string;
  password: string;
  password_confirm: string;
  name: string;
};

type Action =
  | { type: 'username'; payload: string }
  | { type: 'password'; payload: string }
  | { type: 'password_confirm'; payload: string }
  | { type: 'name'; payload: string };

const initialState: State = {
  username: '',
  password: '',
  password_confirm: '',
  name: '',
};

const RegisterForm: React.FC = () => {
  const [state, dispatch] = React.useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'password_confirm':
        return { ...state, password_confirm: action.payload };
      case 'name':
        return { ...state, name: action.payload };
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
          onChangeText={(text) => dispatch({ type: 'name', payload: text })}
        />
      </View>
      <View style={{ marginTop: 28 }}>
        <Button
          // TODO: Next 버튼 누를 때 자체 validation
          title="콜리 시작하기"
          onPress={() => Alert.alert('Title', JSON.stringify(state))}
        />
      </View>
    </View>
  );
};

export default RegisterForm;
