import styled from '@emotion/native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-width: thin;
  border-top-color: rgba(211, 211, 211, 0.55);
`;
const Image = styled.View`
  width: 67pt;
  height: 67pt;
  border-radius: 6pt;
  align-self: center;
  margin-right: 12pt;
  margin-left: 16pt;
  background-color: white;
`;
const TextContainer = styled.View`
  height: 87pt;
  display: flex;
  justify-content: center;
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
  margin-top: 2pt;
  margin-bottom: 7pt;
`;
const Rating = styled.Text`
  margin-left: 5.5pt;
  font-size: 13pt;
  line-height: 20pt;
  color: rgb(141, 141, 147);
`;
const Hashtag = styled.Text`
  font-size: 9pt;
  color: ${({ theme }) => theme.colors.secondary};
`;

interface Props {
  title: string;
  rating: number;
  hashtag?: string;
}

const List: React.FC<Props> = ({ title, rating, hashtag }) => {
  return (
    <Container>
      <Image />
      <TextContainer>
        <Title>{title}</Title>
        <StarRating>
          <Ionicons
            name="star"
            style={{ color: 'rgb(255, 235, 0)' }}
            size={12.5}
          />
          <Rating>{rating}</Rating>
        </StarRating>
        <Hashtag>{hashtag}</Hashtag>
      </TextContainer>
    </Container>
  );
};

export default List;
