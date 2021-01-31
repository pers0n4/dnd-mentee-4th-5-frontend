import React from 'react';
import { Alert, Button, View } from 'react-native';

import TextField from '../../molecules/TextField';

type State = {
  username: string;
  password: string;
  password_confirm: string;
};

type Action =
  | { type: 'username'; payload: string }
  | { type: 'password'; payload: string }
  | { type: 'password_confirm'; payload: string };

const initialState: State = {
  username: '',
  password: '',
  password_confirm: '',
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
    }
  }, initialState);

  return (
    <View style={{ width: '100%', paddingHorizontal: '15%' }}>
      <TextField
        label="Username"
        onChangeText={(text) => dispatch({ type: 'username', payload: text })}
        placeholder="사용자명"
        type="username"
        value={state.username}
      />
      <TextField
        label="Password"
        onChangeText={(text) => dispatch({ type: 'password', payload: text })}
        placeholder="비밀번호"
        type="password"
        value={state.password}
      />
      <TextField
        label="Confirm Password"
        onChangeText={(text) =>
          dispatch({ type: 'password_confirm', payload: text })
        }
        placeholder="비밀번호 확인"
        type="password"
        value={state.password_confirm}
      />
      <View style={{ marginTop: 28 }}>
        <Button
          onPress={() => Alert.alert('Title', JSON.stringify(state))}
          title="Next"
        />
      </View>
    </View>
  );
};

export default RegisterForm;
