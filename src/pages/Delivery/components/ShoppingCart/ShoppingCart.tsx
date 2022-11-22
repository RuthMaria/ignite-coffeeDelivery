import { Trash } from 'phosphor-react';
import React from 'react';
import { Counter } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes/default';
import expresso from '/assets/expresso.svg';

import {
  Amount,
  Article,
  Button,
  Container,
  Img,
  Line,
  Main,
  Price,
  Quantity,
  Span,
  Values,
} from './ShoppingCart.style';

export const ShoppingCart: React.FC = () => {
  return (
    <Container>
      <Article>
        <Img src={expresso} alt="" />

        <Main>
          <div>
            <Span>Expresso tradicional</Span>
            <div>
              <Quantity>
                <Counter />

                <button>
                  <Trash size={16} color={defaultTheme['purple']} />
                  <span>REMOVER</span>
                </button>
              </Quantity>
            </div>
          </div>

          <Price>
            <span>R$</span>
            <span>9,90</span>
          </Price>
        </Main>
      </Article>
      <Line />

      <Values>
        <span>Total de itens</span>
        <span>R$ 299,70</span>
      </Values>

      <Values>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </Values>

      <Amount>
        <span>Total</span>
        <span>R$ 33,20</span>
      </Amount>

      <Button>CONFIRMAR PEDIDO</Button>
    </Container>
  );
};
