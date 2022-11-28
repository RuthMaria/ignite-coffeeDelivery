import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCartSimple } from 'phosphor-react';
import { Counter } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes/default';

import {
  Tag,
  Card,
  Price,
  Group,
  Image,
  Quantity,
  CoffeName,
  Description,
  Button,
} from './CoffeeCard.style';
import { ShoppingCartContext } from '../../../../context/shoppingCart';
import { formatPrice } from '../../../../utils/formatPrice';
import { Coffee } from '../../../../data/coffee';

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const [amount, setAmount] = useState(1);
  const { addCoffeeShoppingCart } = useContext(ShoppingCartContext);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(amount - 1);
  };

  const handleAddCoffeeShoppingCart = () => {
    const { photo, name, price } = coffee;

    const newCoffee = {
      id: uuidv4(),
      photo,
      name,
      price,
      amount,
      totalPrice: amount * price,
    };

    addCoffeeShoppingCart(newCoffee);
  };

  return (
    <Card>
      <Image>
        <div>
          <img src={`/assets/${coffee.photo}`} alt="" />
        </div>
      </Image>

      <Tag>
        {coffee.tags.map((tag) => {
          return <p key={tag}>{tag}</p>;
        })}
      </Tag>

      <CoffeName>{coffee.name}</CoffeName>
      <Description>{coffee.description}</Description>

      <Group>
        <Price>
          <span>R$</span>
          <span>{formatPrice(coffee.price)}</span>
        </Price>

        <Quantity>
          <Counter
            decreaseAmount={decreaseAmount}
            addAmount={addAmount}
            amount={amount}
            hasPadding
          />

          <Button onClick={handleAddCoffeeShoppingCart}>
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color={defaultTheme['white']}
            />
          </Button>
        </Quantity>
      </Group>
    </Card>
  );
};
