import styled from 'styled-components';

export const Container = styled.form`
  min-width: 92rem;
  margin-top: 5rem;
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
