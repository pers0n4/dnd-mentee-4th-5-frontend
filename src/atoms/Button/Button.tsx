import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import React from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  backgroundColor?: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const Button: React.FC<Props> = ({
  title,
  backgroundColor = 'rgb(255,128,119)',
  onPress,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={css({
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 30,
        backgroundColor,
      })}
    >
      <Text
        style={{
          height: 60,
          color: colors.text,
          textAlignVertical: 'center',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
