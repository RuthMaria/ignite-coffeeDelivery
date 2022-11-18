import styled from 'styled-components';
import { ContainerElementProps, STATUS_COLORS } from './IconCircle';

export const Flex = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Container = styled(Flex)<ContainerElementProps>`
  background: ${(props) => props.theme[STATUS_COLORS[props.color]]};
`;
