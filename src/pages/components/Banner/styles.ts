import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7.875rem;
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

export const Flex = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const ShoppingCart = styled(Flex)`
  background: ${(props) => props.theme['yellow-dark']};
`;

export const Cube = styled(Flex)`
  background: ${(props) => props.theme['base-text']};
`;

export const Time = styled(Flex)`
  background: ${(props) => props.theme['yellow']};
`;

export const Cup = styled(Flex)`
  background: ${(props) => props.theme['purple']};
`;
