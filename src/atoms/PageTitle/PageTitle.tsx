import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import React from 'react';
import { Text, View } from 'react-native';

const PageTitle: React.FC = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View
      style={css`
        flex-direction: row;
      `}
    >
      <Text
        style={css`
          color: ${colors.text};
          font-size: 24px;
        `}
      >
        {children}
      </Text>
      <Text
        style={css`
          color: ${colors.primary};
          font-size: 24px;
        `}
      >
        .
      </Text>
    </View>
  );
};

export default PageTitle;
