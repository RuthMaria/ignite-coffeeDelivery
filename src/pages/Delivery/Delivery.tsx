import React from 'react';
import { AddressForm } from './components/AddressForm/AddressForm';
import { FormPayment } from './components/FormPayment/FormPayment';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';

import { Container, Title } from './Delivery.style';

export const Delivery: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Complete seu pedido</Title>

        <AddressForm />
        <FormPayment />
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <ShoppingCart />
      </div>
    </Container>
  );
};
