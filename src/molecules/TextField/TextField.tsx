import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  label: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  type?: 'username' | 'password';
  value?: string;
}

const TextField: React.FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  type,
  value,
}) => {
  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ marginBottom: 4 }}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === 'password' && true}
        style={{ height: 40, borderWidth: 1, paddingHorizontal: 8 }}
        textContentType={type}
        value={value}
      />
    </View>
  );
};

export default TextField;
