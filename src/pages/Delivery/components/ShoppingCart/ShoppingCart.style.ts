import styled from 'styled-components';

export const Img = styled.img`
  width: 64px;
  height: 64px;
`;

export const Main = styled.main`
  display: flex;
`;

export const Article = styled.article`
  display: flex;
  gap: 20px;
  margin-bottom: 33.5px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 40px;
`;

export const Line = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`;

export const Span = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
  margin-bottom: 8px;
`;

export const Quantity = styled.div`
  display: flex;
  gap: 8px;

  button {
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: 400;
    padding: 6.5px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

export const Price = styled.div`
  margin-left: 12px;
  font-weight: bold;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};

  > span {
    margin-left: 0.2rem;
  }
`;

export const Values = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -15px;

  > span {
    font-size: 0.875rem;
  }
`;

export const Amount = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme['yellow']};
  border-radius: 6px;
  color: ${(props) => props.theme['white']};
  font-size: 14px;
  width: 100%;
  padding: 12px 0;

  transition: background-color 1s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
