import styled from '@emotion/native';
import React from 'react';

const ButtonContainer = styled.TouchableHighlight`
  width: fit-content;
  justify-content: center;
  margin: 14pt 0pt;
  padding: 5pt 10pt;
  border-radius: 36pt;
  background-color: ${({ theme }) => theme.colors.background};
`;
const ButtonText = styled.Text`
  text-align: center;
  size: 16pt;
  line-height: 19pt;
  letter-spacing: -0.16pt;
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
