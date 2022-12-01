import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;

  input:checked {
  }
`;

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

export const Payment = styled.section<{ selected?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  input {
    display: none;
    appearance: none;
  }

  input:checked + label {
    border: 1px solid ${(props) => props.theme['purple']};
  }

  label {
    cursor: pointer;
    border-radius: 6px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme['red']};
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  font-size: 13px;
`;
