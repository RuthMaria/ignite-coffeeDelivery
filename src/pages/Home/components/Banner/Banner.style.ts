import styled from 'styled-components';
import background from '../../../../assets/background.svg';

export const Section = styled.section`
  background: url(${background}) no-repeat center;
  background-size: cover;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.063rem;
  max-width: 92rem;
  padding: 94px 10rem 108px 10rem;
`;

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-size: 3rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.3;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 4.125rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
  font-weight: 400;
`;

export const Div = styled.div`
  display: flex;
  gap: 2.5rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
