import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCartSimple } from 'phosphor-react';
import { Counter } from '../../../../components';
import { Coffee } from '../../../../context/coffee';
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

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const [amount, setAmount] = useState(1);
  const { addCoffee } = useContext(ShoppingCartContext);

  const addAmount = (id: string, amount: number) => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(amount - 1);
  };

  const handleAddCoffee = () => {
    const { photo, name, price } = coffee;

    const newCoffee = {
      id: uuidv4(),
      photo,
      name,
      price,
      amount,
      totalPrice: amount * price,
    };

    addCoffee(newCoffee);
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
            id={coffee.id}
            decreaseAmount={decreaseAmount}
            addAmount={addAmount}
            amount={amount}
            hasPadding
            flag="home"
          />

          <Button onClick={handleAddCoffee}>
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
