import styled from '@emotion/native';
import React from 'react';
import { Alert, Text } from 'react-native';

const Container = styled.TouchableHighlight({
  overflow: 'hidden',
  paddingVertical: 8,
  paddingHorizontal: 16,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderRadius: 32,
});

interface Props {
  text: string;
}

const Hashtag: React.FC<Props> = ({ text }) => {
  return (
    <Container underlayColor="#eee" onPress={() => Alert.alert('hello')}>
      <Text># {text}</Text>
    </Container>
  );
};

export default Hashtag;
