import styled from '@emotion/native';
import React from 'react';
import { ViewProps } from 'react-native';

const Container = styled.View(({ theme }) => ({
  paddingHorizontal: 32,
  paddingVertical: 16,
  backgroundColor: theme.colors.background,
}));

interface Props extends ViewProps {}

const ThemeView: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default ThemeView;
