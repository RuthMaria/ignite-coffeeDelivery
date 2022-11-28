import { Trash } from 'phosphor-react';
import React, { useContext } from 'react';
import { Counter } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes/default';

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
import { ShoppingCartContext } from '../../../../context/shoppingCart';
import { formatPrice } from '../../../../utils/formatPrice';
import { Coffee } from '../../../../reducers/shoppingCart/reducer';

export const ShoppingCart: React.FC = () => {
  const { shoppingCart, removeCoffeeShoppingCart } =
    useContext(ShoppingCartContext);

  const handleRemoveCoffee = (coffee: Coffee) => {
    removeCoffeeShoppingCart(coffee.id);
  };

  return (
    <Container>
      {shoppingCart.map((coffee) => {
        return (
          <div key={coffee.id}>
            <Article>
              <Img src={`/assets/${coffee.photo}`} alt="" />

              <Main>
                <div>
                  <Span>{coffee.name}</Span>
                  <div>
                    <Quantity>
                      <Counter
                        amount={coffee.amount}
                        addAmount={() => {}}
                        decreaseAmount={() => {}}
                      />

                      <button onClick={() => handleRemoveCoffee(coffee)}>
                        <Trash size={16} color={defaultTheme['purple']} />
                        <span>REMOVER</span>
                      </button>
                    </Quantity>
                  </div>
                </div>

                <Price>
                  <span>R$</span>
                  <span>{formatPrice(coffee.totalPrice)}</span>
                </Price>
              </Main>
            </Article>
            <Line />
          </div>
        );
      })}

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
