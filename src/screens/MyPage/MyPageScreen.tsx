import { css } from '@emotion/native';
import React from 'react';

import PageTitle from '../../atoms/PageTitle';
import MyPageMenu from '../../organisms/MyPageMenu';
import ThemeView from '../../templates/ThemeView';

const MyPageScreen: React.FC = () => {
  return (
    <ThemeView
      style={css`
        flex: 1;
      `}
    >
      <PageTitle style={{ marginBottom: 24 }}>콜리 설정</PageTitle>
      <MyPageMenu />
    </ThemeView>
  );
};

export default MyPageScreen;
