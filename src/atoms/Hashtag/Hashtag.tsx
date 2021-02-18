import styled, { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import React from 'react';
import { Alert, Text } from 'react-native';

const Container = styled.TouchableHighlight(({ theme }) => ({
  overflow: 'hidden',
  alignSelf: 'center',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderColor: theme.colors.secondary,
  borderWidth: 1,
  borderRadius: 32,
}));

interface Props {
  text: string;
}

const Hashtag: React.FC<Props> = ({ text }) => {
  const theme = useTheme();

  return (
    <Container underlayColor="#7c7c7c" onPress={() => Alert.alert('hello')}>
      <Text style={css({ color: theme.colors.primary })}>{text}</Text>
    </Container>
  );
};

export default Hashtag;
