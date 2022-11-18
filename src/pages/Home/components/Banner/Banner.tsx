import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';

import image from '../../../../assets/image.svg';
import background from '../../../../assets/background.svg';

import {
  Div,
  Group,
  Title,
  Section,
  DivTimer,
  Subtitle,
  DivCoffee,
  Container,
  DivPackage,
  Information,
  DivShoppingCart,
} from './Banner.style';

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
                <DivShoppingCart>
                  <ShoppingCart
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </DivShoppingCart>
                Compras simples e segura
              </Group>

              <Group>
                <DivPackage>
                  <Package
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </DivPackage>
                Embalagem mantém o café intacto
              </Group>
            </Div>

            <Div>
              <Group>
                <DivTimer>
                  <Timer
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </DivTimer>
                Entrega rápida e rastreada
              </Group>

              <Group>
                <DivCoffee>
                  <Coffee
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </DivCoffee>
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
