import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import React from 'react';
import { defaultTheme } from '../../../../styles/themes/default';

import { Container, Header, Payment } from './FormPayment.style';

export const FormPayment: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};
