import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import React from 'react';
import { View } from 'react-native';

import * as homeImg from '../../../assets/home';
import CategorySelector from '../../molecules/CategorySelector';
import List from '../../molecules/List';
import ThemeScrollView from '../../templates/ThemeScrollView';

const DRINKS = [
  {
    image: homeImg.apsolut,
    title: '앱솔루트 어피치',
  },
  {
    image: homeImg.bigBend,
    title: '빅 벤드 샤도나이',
  },
  {
    image: homeImg.bigWave,
    title: '빅웨이브',
  },
  {
    image: homeImg.bosio,
    title: '보시오 모스카토 다스티',
  },
  {
    image: homeImg.fresh,
    title: '참이슬 후레쉬',
  },
  {
    image: homeImg.guinness,
    title: '기네스 드래프트',
  },
  { image: homeImg.jackDaniels, title: '잭다니엘' },
  { image: homeImg.jager, title: '예거 마이스터' },
  { image: homeImg.jejuSlice, title: '제주 슬라이스' },
  { image: homeImg.jinro, title: '진로' },
  { image: homeImg.lucente, title: '루체 델라 비테, 루첸테' },
  { image: homeImg.seoulNight, title: '서울의 밤' },
];

const Pick = styled.Image`
  width: 200;
  height: 200;
  align-self: center;
`;
const Text = styled.Text`
  text-align: center;
  font-size: 14px;
  color: rgb(232, 232, 238);
`;

const HomeScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ThemeScrollView>
      <CategorySelector />
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Text>오늘의 원픽</Text>
        <Text style={{ color: colors.primary }}>.</Text>
      </View>
      <Text style={{ marginBottom: 40, fontSize: 19 }}>ABSOLUT VODKA</Text>
      {DRINKS.map((v) => (
        <List
          key={v.image}
          style=""
          source={v.image}
          title={v.title}
          visible={false}
        />
      ))}
    </ThemeScrollView>
  );
};

export default HomeScreen;
