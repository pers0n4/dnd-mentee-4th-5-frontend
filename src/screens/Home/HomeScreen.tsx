import { css } from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';

import ThemeView from '../../templates/ThemeView';

const HomeScreen: React.FC = () => {
  return (
    <ThemeView
      style={css`
        flex: 1;
      `}
    >
      <Text>홈</Text>
    </ThemeView>
  );
};

export default HomeScreen;
