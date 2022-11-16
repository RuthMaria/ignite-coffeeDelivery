import React from 'react';
import { Plus } from 'phosphor-react';
import { Banner } from './components/Banner';
import {
  Title,
  Card,
  Tag,
  CoffeName,
  Price,
  Description,
  Group,
  Section,
  Image,
  Quantity,
  Content,
} from './styles';
import expresso from '../../assets/expresso.svg';
import shoppingCartSimple from '../../assets/shoppingCartSimple.svg';
import less from '../../assets/less.svg';
import { defaultTheme } from '../../styles/themes/default';
import { Counter } from '../../components/Counter';

export const Home: React.FC = () => {
  return (
    <div>
      <Banner />

      <Content>
        <Title>Nossos cafés</Title>

        <Section>
          <Card>
            <Image>
              <div>
                <img src={expresso} alt="" />
              </div>
            </Image>

            <Tag>TRADICIONAL</Tag>

            <CoffeName>Expresso Tadicional</CoffeName>
            <Description>
              O tradicional café feito com água quente e grãos moídos
            </Description>

            <Group>
              <Price>
                <span>R$</span>
                <span>9,90</span>
              </Price>

              <Quantity>
                <Counter />

                <div>
                  <img src={shoppingCartSimple} alt="" />
                </div>
              </Quantity>
            </Group>
          </Card>
        </Section>
      </Content>
    </div>
  );
};
