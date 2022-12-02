import React from 'react';
import { Minus, Plus } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

import { Container } from './Counter.style';

export interface ContainerProps {
  hasPadding?: boolean;
}

interface CounterProps extends ContainerProps {
  addAmount: () => any;
  decreaseAmount: () => any;
  amount: number;
}

export const Counter: React.FC<CounterProps> = ({
  amount,
  addAmount,
  hasPadding,
  decreaseAmount,
}) => {
  return (
    <Container hasPadding={hasPadding}>
      <button type="button" disabled={amount === 1} onClick={decreaseAmount}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" readOnly value={amount} />
      <button type="button" onClick={addAmount}>
        <Plus size={14} weight="fill" />
      </button>
    </Container>
  );
};
