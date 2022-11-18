import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import image from '../../../../assets/image.svg';
import { IconCircle } from '../../../../components';

import { defaultTheme } from '../../../../styles/themes/default';
import {
  Div,
  Group,
  Title,
  Section,
  Subtitle,
  Container,
  Information,
} from './Banner.style';

export const Banner: React.FC = () => {
  return (
    <Section>
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
                <IconCircle color="yellowDark">
                  <ShoppingCart
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </IconCircle>
                Compras simples e segura
              </Group>

              <Group>
                <IconCircle color="gray">
                  <Package
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </IconCircle>
                Embalagem mantém o café intacto
              </Group>
            </Div>

            <Div>
              <Group>
                <IconCircle color="yellow">
                  <Timer
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </IconCircle>
                Entrega rápida e rastreada
              </Group>

              <Group>
                <IconCircle color="purple">
                  <Coffee
                    size={16}
                    weight="fill"
                    color={defaultTheme['white']}
                  />
                </IconCircle>
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
