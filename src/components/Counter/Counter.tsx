import React from 'react';
import { Minus, Plus } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

import { Container } from './Counter.style';

export interface ContainerProps {
  hasPadding?: boolean;
}

export const Counter: React.FC<ContainerProps> = ({ hasPadding }) => {
  return (
    <Container hasPadding={hasPadding}>
      <button>
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" readOnly value={1} />
      <button>
        <Plus size={14} weight="fill" />
      </button>
    </Container>
  );
};
