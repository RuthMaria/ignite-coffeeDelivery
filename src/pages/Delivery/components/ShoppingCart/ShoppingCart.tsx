import { Trash } from 'phosphor-react';
import React, { useContext } from 'react';
import { Counter } from '../../../../components';
import { formatPrice } from '../../../../utils/formatPrice';
import { defaultTheme } from '../../../../styles/themes/default';
import { Coffee } from '../../../../reducers/shoppingCart/reducer';
import { ShoppingCartContext } from '../../../../context/shoppingCart';
import {
  addAmountCoffeeShoppingCartAction,
  decreaseAmountCoffeeShoppingCartAction,
} from '../../../../reducers/shoppingCart/actions';

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
  const { shoppingCart, removeCoffeeShoppingCart, dispatch, totalItems } =
    useContext(ShoppingCartContext);

  const handleRemoveCoffeeShoppingCart = (coffee: Coffee) => {
    removeCoffeeShoppingCart(coffee.id);
  };

  const totalPrice = () => {
    const TAXA = 3.5;
    return formatPrice(totalItems() + TAXA);
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
                        addAmount={() => {
                          dispatch(
                            addAmountCoffeeShoppingCartAction(coffee.id)
                          );
                        }}
                        decreaseAmount={() => {
                          dispatch(
                            decreaseAmountCoffeeShoppingCartAction(coffee.id)
                          );
                        }}
                      />

                      <button
                        onClick={() => handleRemoveCoffeeShoppingCart(coffee)}
                      >
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
        <span>R$ {formatPrice(totalItems())}</span>
      </Values>

      <Values>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </Values>

      <Amount>
        <span>Total</span>
        <span>R$ {totalPrice()}</span>
      </Amount>

      <Button type="submit">CONFIRMAR PEDIDO</Button>
    </Container>
  );
};
