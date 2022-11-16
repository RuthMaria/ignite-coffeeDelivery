import cup from '../../../../assets/cup.svg';
import cube from '../../../../assets/cube.svg';
import time from '../../../../assets/time.svg';
import image from '../../../../assets/image.svg';
import shoppingCart from '../../../../assets/shoppingCart-white.svg';

import {
  Div,
  Cup,
  Cube,
  Time,
  Group,
  Title,
  Section,
  Subtitle,
  Container,
  Information,
  ShoppingCart,
} from './styles';
import background from '../../../../assets/background.svg';

export const Banner: React.FC = () => {
  return (
    <Section background={background}>
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
                  <img src={cube} alt="Cubo" />
                </Cube>
                Embalagem mantém o café intacto
              </Group>
            </Div>

            <Div>
              <Group>
                <Time>
                  <img src={time} alt="Relógio" />
                </Time>
                Entrega rápida e rastreada
              </Group>

              <Group>
                <Cup>
                  <img src={cup} alt="Xícara de café" />
                </Cup>
                O café chega fresquinho até você
              </Group>
            </Div>
          </Information>
        </div>

        <img src={image} alt="" />
      </Container>
    </Section>
  );
};
