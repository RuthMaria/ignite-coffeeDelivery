import image from '../../../assets/image.svg';
import shoppingCart from '../../../assets/shoppingCart-white.svg';
import cube from '../../../assets/cube.svg';
import time from '../../../assets/time.svg';
import cup from '../../../assets/cup.svg';

import {
  Container,
  Title,
  Subtitle,
  Div,
  Group,
  Information,
  ShoppingCart,
  Cube,
  Time,
  Cup,
} from './styles';

export const Banner: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <Information>
          <Div>
            <Group>
              <ShoppingCart>
                <img
                  src={shoppingCart}
                  alt="Carrinho de compras de supermercado"
                />
              </ShoppingCart>
              Compras simples e segura
            </Group>

            <Group>
              <Cube>
                <img src={cube} alt="Carrinho de compras de supermercado" />
              </Cube>
              Embalagem mantém o café intacto
            </Group>
          </Div>

          <Div>
            <Group>
              <Time>
                <img src={time} alt="Carrinho de compras de supermercado" />
              </Time>
              Entrega rápida e rastreada
            </Group>

            <Group>
              <Cup>
                <img src={cup} alt="Carrinho de compras de supermercado" />
              </Cup>
              O café chega fresquinho até você
            </Group>
          </Div>
        </Information>
      </div>

      <img src={image} alt="" />
    </Container>
  );
};
