import React from 'react';
import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';

import {
  Address,
  Input,
  Complement,
  Optional,
  Content,
  Header,
  Div,
  Error,
} from './AddressForm.style';
import { useFormContext } from 'react-hook-form';

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export const AddressForm: React.FC = () => {
  const { register, formState } = useFormContext();

  const { errors } = formState as ErrorsType;

  return (
    <Content>
      <Header>
        <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Header>

      <Address>
        <Input
          hasError={!!errors.cep?.message}
          type="text"
          width={15}
          placeholder="CEP"
          id="cep"
          {...register('cep')}
        />
        {errors && <Error>{errors.cep?.message}</Error>}
        <Input
          hasError={!!errors.street?.message}
          type="text"
          placeholder="Rua"
          id="street"
          {...register('street')}
        />
        {errors && <Error>{errors.street?.message}</Error>}
        <Complement>
          <div>
            <Input
              hasError={!!errors.number?.message}
              type="text"
              placeholder="Número"
              id="number"
              {...register('number')}
            />
            {errors && <Error>{errors.number?.message}</Error>}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Complemento"
              id="complement"
              {...register('complement')}
            />
            <Optional hasError={!!errors.number?.message}>Opcional</Optional>
          </div>
        </Complement>

        <Div>
          <div>
            <Input
              hasError={!!errors.district?.message}
              type="text"
              placeholder="Bairro"
              id="district"
              {...register('district')}
            />
            {errors && <Error>{errors.district?.message}</Error>}
          </div>
          <div>
            <Input
              hasError={!!errors.city?.message}
              type="text"
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
            {errors && <Error>{errors.city?.message}</Error>}
          </div>
          <div>
            <Input
              hasError={!!errors.uf?.message}
              type="text"
              placeholder="UF"
              id="uf"
              {...register('uf')}
            />
            {errors && <Error>{errors.uf?.message}</Error>}
          </div>
        </Div>
      </Address>
    </Content>
  );
};
