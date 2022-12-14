import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  gap: 8px;

  div {
    p {
      line-height: 1.3;
      margin-bottom: 2px;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p + p {
      line-height: 1.3;
      font-size: 0.875rem;
      margin-bottom: 32px;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 36% 1fr 10%;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input<{ width?: number; hasError?: boolean }>`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  width: ${(props) => props.width}rem;
  border: ${(props) =>
    props.hasError &&
    `1px solid
    ${props.theme['red']}`};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1.5px solid ${(props) => props.theme['yellow-dark']};
    outline: none;
  }

  //para remover os botões de incrementar e decrementar do input=[type=number]
  -moz-appearance: textfield;
  appearance: textfield;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme['red']};
  margin-top: -0.8rem;
  margin-bottom: 1rem;
  font-size: 13px;
`;

export const Complement = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 36% 1fr;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Optional = styled.p<{ hasError: boolean }>`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  position: absolute;
  right: 1rem;
  bottom: ${(props) => (props.hasError ? '3.1' : '2')}rem;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme['purple']};
  padding: 12px;
  height: 2.7rem;
  border-radius: 4px;
  display: flex;
  align-items: center;

  transition: opacity 1s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CepSearch = styled.div`
  display: flex;
  gap: 12px;
`;
