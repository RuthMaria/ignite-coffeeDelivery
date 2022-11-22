import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;
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

export const Payment = styled.div<{ selected?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  div {
    cursor: pointer;
    border-radius: 6px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    border: ${(props) =>
      props.selected && `1px solid ${props.theme['purple']}`};

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  div:nth-child(3) {
    justify-content: flex-start;
  }
`;
