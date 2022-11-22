import styled from 'styled-components';

export const Content = styled.div`
  max-width: 92rem;
  padding: 0 10rem;
`;

export const Title = styled.p`
  margin-top: 2rem;
  margin-bottom: 3.375rem;
  font-family: 'Baloo 2';
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
  font-weight: 800;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;
