import React from 'react';
import { Plus } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import less from '../../assets/less.svg';

import { Container } from './styles';

export const Counter: React.FC = () => {
  return (
    <Container>
      <img src={less} alt="" />
      <span>1</span>
      <Plus color={defaultTheme['purple']} />
    </Container>
  );
};
