import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';

import * as likes from '../../../assets/favorite';
import { star } from '../../../assets/home';

const Container = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-width: thin;
  border-top-color: rgba(211, 211, 211, 0.55);
`;
const Image = styled.Image`
  width: 67pt;
  height: 67pt;
  border-radius: 6pt;
  align-self: center;
  margin-right: 12pt;
  margin-left: 16pt;
  object-fit: contain;
`;
const TextContainer = styled.View`
  height: 87pt;
  display: flex;
  justify-content: space-between;
  padding: 10pt 0pt;
`;
const Title = styled.Text`
  font-size: 15pt;
  line-height: 20pt;
  color: white;
`;
const StarRating = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Star = styled.Image`
  width: 12pt;
  height: 12pt;
  align-self: center;
  object-fit: contain;
`;
const Rating = styled.Text`
  margin-left: 5.5pt;
  font-size: 13pt;
  line-height: 20pt;
  color: rgb(141, 141, 147);
`;
const Hashtag = styled.Text`
  width: fit-content;
  margin-right: 5pt;
  padding: 3pt;
  border-width: 1pt;
  border-radius: 23pt;
  border-color: ${({ theme }) => theme.colors.border};
  align-content: center;
  font-size: 9pt;
  color: ${({ theme }) => theme.colors.card};
`;
const Likes = styled.Image`
  width: 28.6pt;
  height: 24.6pt;
  position: absolute;
  right: 16pt;
`;

interface Props {
  style: any;
  source: string;
  title: string;
  visible: boolean;
}

const List: React.FC<Props> = ({ source, style, title, visible }) => {
  return (
    <Container style={style}>
      <Image source={{ uri: source }} />
      <TextContainer>
        <Title>{title}</Title>
        <StarRating>
          <Star source={star} />
          <Rating>4.5</Rating>
        </StarRating>
        <View style={{ flexDirection: 'row' }}>
          <Hashtag>이게 플렉스</Hashtag>
          <Hashtag>혼술에 추천</Hashtag>
        </View>
      </TextContainer>
      {visible && <Likes source={likes.like} />}
    </Container>
  );
};

export default List;
