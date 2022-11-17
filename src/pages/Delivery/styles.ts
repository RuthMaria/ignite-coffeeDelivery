import styled from 'styled-components';

export const Container = styled.div`
  max-width: 92rem;
  padding: 4.5rem 10rem;
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 32px;
`;

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
  font-weight: 800;
  margin-bottom: 0.938rem;
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

export const Div = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 12px;
  }
`;

export const Input = styled.input<{ width: number }>`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  width: ${(props) => props.width}rem;
  position: relative;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1.5px solid ${(props) => props.theme['yellow-dark']};
    outline: none;
  }
`;

export const Optional = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  position: absolute;
  right: 43.5rem;
  bottom: 18.7rem;
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
`;

export const Section = styled.section`
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
