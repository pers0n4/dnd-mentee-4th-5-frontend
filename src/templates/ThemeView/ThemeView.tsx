import styled from '@emotion/native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ViewProps } from 'react-native';

const Container = styled.View(({ theme }) => ({
  paddingTop: Constants.statusBarHeight,
  paddingHorizontal: 32,
  backgroundColor: theme.colors.background,
}));

interface Props extends ViewProps {}

const ThemeView: React.FC<Props> = ({ children, style, ...props }) => {
  return (
    <Container style={Object.assign({ flex: 1 }, style)} {...props}>
      <StatusBar style="inverted" />
      {children}
    </Container>
  );
};

export default ThemeView;
