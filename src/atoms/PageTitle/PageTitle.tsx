import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

const Container = styled.View({
  flexDirection: 'row',
});

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const PageTitle: React.FC<Props> = ({ children, style }) => {
  const { colors } = useTheme();

  return (
    <Container style={style}>
      <Text
        style={{
          color: colors.text,
          fontSize: 24,
        }}
      >
        {children}
      </Text>
      <Text
        style={{
          color: colors.primary,
          fontSize: 24,
        }}
      >
        .
      </Text>
    </Container>
  );
};

export default PageTitle;
