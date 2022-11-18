import { ImageElementContainer } from 'html2canvas/dist/types/dom/replaced-elements/image-element-container';
import { ShoppingCart } from 'phosphor-react';
import React, { ReactNode } from 'react';
import { defaultTheme } from '../../styles/themes/default';

export const STATUS_COLORS = {
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const; /* força ser uma tipagem do tipo enum */

export interface ContainerElementProps {
  color: keyof typeof STATUS_COLORS /*pega apenas as chaves do objeto (yellow | green | red) e usa como tipagem*/;
}

interface IconCircleProps extends ContainerElementProps {
  children?: ReactNode;
}

import { Container } from './IconCircle.style';

export const IconCircle: React.FC<IconCircleProps> = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};
