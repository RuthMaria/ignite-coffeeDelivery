import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Image = styled.div`
  img {
    width: 120px;
    height: 120px;
    margin-top: -3.25rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  p {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;
    border-radius: 6.25rem;
    padding: 0.3rem 0.6rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    text-transform: uppercase;
  }
`;

export const CoffeName = styled.p`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  margin-bottom: 2.063rem;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.438rem;
`;

export const Price = styled.div`
  > span {
    font-size: 0.8rem;
  }

  span + span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    margin-left: 0.2rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 8px;

  img,
  svg {
    cursor: pointer;
  }

  div + div {
    background: ${(props) => props.theme['purple-dark']};
    padding: 8px;
    border-radius: 6px;

    :hover {
      background: ${(props) => props.theme['purple']};
    }
  }
`;
