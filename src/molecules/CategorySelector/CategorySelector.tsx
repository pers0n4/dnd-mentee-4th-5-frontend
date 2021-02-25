import styled from '@emotion/native';
import React, { useState } from 'react';

import Category from '../../atoms/Category';

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CategorySelector: React.FC = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Container>
      <Category onPress={() => setPressed(true)} title="전체" />
      <Category onPress={() => setPressed(true)} title="와인" />
      <Category onPress={() => setPressed(true)} title="양주" />
      <Category onPress={() => setPressed(true)} title="맥주" />
      <Category onPress={() => setPressed(true)} title="전통주" />
    </Container>
  );
};

export default CategorySelector;
