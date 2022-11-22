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
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    text-align: center;
    width: 30px;
    background: transparent;
    margin-right: -1rem;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }
`;
