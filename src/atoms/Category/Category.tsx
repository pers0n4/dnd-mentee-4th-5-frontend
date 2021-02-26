import styled from '@emotion/native';
import React from 'react';

const ButtonContainer = styled.TouchableHighlight`
  /* width: fit-content; */
  justify-content: center;
  margin: 14px 0px;
  padding: 5px 10px;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.background};
`;
const ButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.16px;
  color: white;
`;

interface Props {
  title: string;
  onPress?: () => void;
}

const Category: React.FC<Props> = ({ onPress, title }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Category;
