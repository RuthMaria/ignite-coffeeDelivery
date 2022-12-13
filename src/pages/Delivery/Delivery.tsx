import React, { useContext } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from './components/AddressForm/AddressForm';
import { FormPayment } from './components/FormPayment/FormPayment';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { Container, Title } from './Delivery.style';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/shoppingCart';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const addressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(1, 'Informe o CEP')
    .max(9, 'Informe no máximo 8 números'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod
    .string()
    .min(1, 'Informe o UF')
    .max(2, 'Informe no máximo 2 caracteres'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export const Delivery: React.FC = () => {
  const { removeAllCoffeeShoppingCart } = useContext(ShoppingCartContext);

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  });

  const { handleSubmit } = addressForm;
  const navigate = useNavigate();

  const handleFinishDelivery = (data: AddressFormData) => {
    navigate('/deliveryConfirmation', {
      state: data,
    });

    removeAllCoffeeShoppingCart();
  };

  return (
    <Container onSubmit={handleSubmit(handleFinishDelivery)}>
      <FormProvider {...addressForm}>
        <div>
          <Title>Complete seu pedido</Title>

          <AddressForm />
          <FormPayment />
        </div>

        <div>
          <Title>Cafés selecionados</Title>
          <ShoppingCart />
        </div>
      </FormProvider>
    </Container>
  );
};
