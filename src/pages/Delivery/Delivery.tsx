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
  Values,
  Amount,
  Button,
  Optional,
  Complement,
} from './Delivery.style';
import { Trash } from 'phosphor-react';

import { defaultTheme } from '../../styles/themes/default';
import expresso from '/assets/expresso.svg';
import { Counter } from '../../components';

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
            <Input type="text" width={15} placeholder="CEP" />
            <Input type="text" width={40} placeholder="Rua" />

            <Complement>
              <Input type="text" width={15} placeholder="Número" />
              <Input type="text" width={24.3} placeholder="Complemento" />
              <Optional>Opcional</Optional>
            </Complement>

            <div>
              <Input type="text" width={15} placeholder="Bairro" />
              <Input type="text" width={18.45} placeholder="Cidade" />
              <Input type="text" width={4.95} placeholder="UF" />
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
                <span>99,90</span>
              </Price>
            </Main>
          </Article>
          <Line />

          <Values>
            <span>Total de itens</span>
            <span>R$ 299,70</span>
          </Values>

          <Values>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </Values>

          <Amount>
            <span>Total</span>
            <span>R$ 33,20</span>
          </Amount>

          <Button>CONFIRMAR PEDIDO</Button>
        </Section>
      </div>
    </Container>
  );
};
