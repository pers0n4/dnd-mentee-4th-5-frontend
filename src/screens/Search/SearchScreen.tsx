import { css } from '@emotion/native';
import React from 'react';

import PageTitle from '../../atoms/PageTitle/PageTitle';
import ThemeView from '../../templates/ThemeView';

const SearchScreen: React.FC = () => {
  return (
    <ThemeView
      style={css`
        flex: 1;
      `}
    >
      <PageTitle>당신의 술 검색</PageTitle>
    </ThemeView>
  );
};

export default SearchScreen;
