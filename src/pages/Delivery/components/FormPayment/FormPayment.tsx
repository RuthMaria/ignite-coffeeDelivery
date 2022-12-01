import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { defaultTheme } from '../../../../styles/themes/default';
import { ErrorsType } from '../AddressForm/AddressForm';

import { Container, Header, Payment, Error } from './FormPayment.style';

export const FormPayment: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

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
        <div {...register('paymentMethod')}>
          <CreditCard size={16} color={defaultTheme['purple']} />
          <input type="radio" id="credit" name="paymentMethod" value="credit" />
          <label htmlFor="credit">CARTÃO DE CRÉDITO</label>
        </div>
        <div {...register('paymentMethod')}>
          <Bank size={16} color={defaultTheme['purple']} />
          <input type="radio" id="debit" name="paymentMethod" value="debit" />
          <label htmlFor="debit">CARTÃO DE DÉBITO</label>
        </div>
        <div {...register('paymentMethod')}>
          <Money size={16} color={defaultTheme['purple']} />
          <input type="radio" id="money" name="paymentMethod" value="money" />
          <label htmlFor="money">DINHEIRO</label>
        </div>
      </Payment>
      {paymentMethodError && <Error>{paymentMethodError}</Error>}
    </Container>
  );
};
