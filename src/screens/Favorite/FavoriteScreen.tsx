import styled from '@emotion/native';
import React from 'react';

import * as homeImg from '../../../assets/home';
import PageTitle from '../../atoms/PageTitle';
import List from '../../molecules/List';
import ThemeView from '../../templates/ThemeView';

const Container = styled.View`
  width: 90%;
  /* height: fit-content; */
  padding: 20px 16px;
  justify-content: center;
  align-self: center;
  border-radius: 13px;
  background-color: rgb(44, 44, 46);
`;
const Total = styled.Text`
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 20px;
  color: rgb(232, 232, 238);
`;

const FavoriteScreen: React.FC = () => {
  return (
    <ThemeView>
      <PageTitle>콜리스트</PageTitle>
      <Container>
        <Total>총 1개</Total>
        <List
          style={{ borderTopWidth: 0, backgroundColor: 'transparent' }}
          source={homeImg.apsolut}
          title="앱솔루트 어피치"
          visible
        />
      </Container>
    </ThemeView>
  );
};

export default FavoriteScreen;
