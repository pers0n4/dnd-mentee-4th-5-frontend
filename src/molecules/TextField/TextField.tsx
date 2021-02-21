import { useTheme } from '@emotion/react';
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
  const { colors } = useTheme();

  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ marginBottom: 4, color: colors.text }}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === 'password' && true}
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: colors.border,
          paddingHorizontal: 8,
          color: colors.text,
        }}
        textContentType={type}
        value={value}
      />
    </View>
  );
};

export default TextField;
