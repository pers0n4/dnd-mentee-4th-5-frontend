import { css } from '@emotion/native';
import React from 'react';

import PageTitle from '../../atoms/PageTitle';
import ThemeView from '../../templates/ThemeView';

const FavoriteScreen: React.FC = () => {
  return (
    <ThemeView
      style={css`
        flex: 1;
      `}
    >
      <PageTitle>콜리스트</PageTitle>
    </ThemeView>
  );
};

export default FavoriteScreen;
