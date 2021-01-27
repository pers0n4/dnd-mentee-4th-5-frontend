import React from 'react';
import { Alert, Button, View } from 'react-native';

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
  const [state, dispatch] = React.useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
    }
  }, initialState);

  return (
    <View style={{ width: '70%' }}>
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
      <View style={{ marginTop: 28 }}>
        <Button
          onPress={() => Alert.alert('Title', JSON.stringify(state))}
          title="LOGIN"
        />
      </View>
    </View>
  );
};

export default LoginForm;
