import styled from 'styled-components';
import { ContainerProps } from './Counter';

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: ${(props) => props.hasPadding && '0.5rem 0.531rem'};

  button {
    background: transparent;
    transition: 0.4s;
    cursor: pointer;
    color: ${(props) => props.theme['purple']};

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    text-align: center;
    width: ${(props) => (props.hasPadding ? '15px' : '20px')};
    background: transparent;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: none;
    }

    -moz-appearance: textfield;
    appearance: textfield;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
