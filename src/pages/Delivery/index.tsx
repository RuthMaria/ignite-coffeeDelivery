import React from 'react';
import {
  MapPinLine,
  Bank,
  Money,
  CurrencyDollar,
  CreditCard,
} from 'phosphor-react';
import {
  Container,
  Payment,
  Address,
  Input,
  Div,
  Title,
  Header,
  Section,
  Price,
  Quantity,
  Span,
  Line,
  Main,
  Img,
  Article,
} from './styles';
import { Trash } from 'phosphor-react';

import { defaultTheme } from '../../styles/themes/default';
import expresso from '../../assets/expresso.svg';
import { Counter } from '../../components/Counter';

export const Delivery: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Complete seu pedido</Title>

        <Div>
          <Header>
            <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>

          <Address>
            <Input type="text" width={12.5} placeholder="CEP" />
            <Input type="text" width={35} placeholder="Rua" />

            <div>
              <Input type="text" width={12.5} placeholder="Número" />
              <Input type="text" width={21.75} placeholder="Complemento" />
            </div>

            <div>
              <Input type="text" width={12.5} placeholder="Bairro" />
              <Input type="text" width={17.25} placeholder="Cidade" />
              <Input type="text" width={3.75} placeholder="UF" />
            </div>
          </Address>
        </Div>

        <Div>
          <Header>
            <CurrencyDollar size={22} color={defaultTheme['purple']} />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Header>

          <Payment>
            <div>
              <CreditCard size={16} color={defaultTheme['purple']} />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
            <div>
              <Bank size={16} color={defaultTheme['purple']} />
              <span>CARTÃO DE DÉBITO</span>
            </div>
            <div>
              <Money size={16} color={defaultTheme['purple']} />
              <span> DINHEIRO</span>
            </div>
          </Payment>
        </Div>
      </div>

      <div>
        <Title>Cafés selecionados</Title>

        <Section>
          <Article>
            <Img src={expresso} alt="" />

            <Main>
              <div>
                <Span>Expresso tradicional</Span>
                <div>
                  <Quantity>
                    <Counter />

                    <button>
                      <Trash size={16} color={defaultTheme['purple']} />
                      <span>REMOVER</span>
                    </button>
                  </Quantity>
                </div>
              </div>

              <Price>
                <span>R$</span>
                <span>9,90</span>
              </Price>
            </Main>
          </Article>
          <Line />
          <Article>
            <Img src={expresso} alt="" />

            <Main>
              <div>
                <Span>Expresso tradicional</Span>
                <div>
                  <Quantity>
                    <Counter />

                    <button>
                      <Trash size={16} color={defaultTheme['purple']} />
                      <span>REMOVER</span>
                    </button>
                  </Quantity>
                </div>
              </div>

              <Price>
                <span>R$</span>
                <span>9,90</span>
              </Price>
            </Main>
          </Article>
          <Line />
        </Section>
      </div>
    </Container>
  );
};
