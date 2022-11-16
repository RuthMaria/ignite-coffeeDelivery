import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme['base-button']};
  padding: 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  span {
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
  }
`;
