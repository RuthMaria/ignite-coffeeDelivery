import React, { useState } from 'react';
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
} from './CoffeeCard.style';

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const [amount, setAmount] = useState(1);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(amount - 1);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    });
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

          <div>
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color={defaultTheme['white']}
            />
          </div>
        </Quantity>
      </Group>
    </Card>
  );
};
