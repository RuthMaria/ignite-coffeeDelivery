import styled from 'styled-components';

export const Container = styled.div`
  padding: 200px 10rem;
  display: grid;
  gap: 102px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  line-height: 1.3;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 1.3;
`;

export const Card = styled.div`
  flex: 1;
  border: 1px solid transparent;
  background: linear-gradient(
        ${(props) => props.theme['background']},
        ${(props) => props.theme['background']}
      )
      padding-box,
    linear-gradient(
        45deg,
        ${(props) => props.theme['yellow']},
        ${(props) => props.theme['purple']}
      )
      border-box;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Prediction = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    span {
      font-weight: bold;
      line-height: 1.3;
    }

    p {
      line-height: 1.3;
    }
  }
`;
