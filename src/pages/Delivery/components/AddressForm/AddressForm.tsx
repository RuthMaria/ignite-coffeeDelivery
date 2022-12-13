import React from 'react';
import { MagnifyingGlass, MapPinLine } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';
import axios from 'axios';

import {
  Address,
  Input,
  Complement,
  Optional,
  Content,
  Header,
  Div,
  Error,
  Button,
  CepSearch,
} from './AddressForm.style';
import { useFormContext } from 'react-hook-form';

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

interface CEPData {
  logradouro: string;
  complemento: string;
  localidade: string;
  uf: string;
  bairro: string;
  cep: string;
}

export const AddressForm: React.FC = () => {
  const { register, formState, setValue, getValues, clearErrors } =
    useFormContext();
  const { errors } = formState as ErrorsType;

  const searchCep = () => {
    axios<CEPData>({
      method: 'get',
      url: `https://viacep.com.br/ws/${getValues('cep')}/json/`,
    }).then((response) => {
      setValue('street', response.data.logradouro);
      setValue('complement', response.data.complemento);
      setValue('city', response.data.localidade);
      setValue('uf', response.data.uf);
      setValue('district', response.data.bairro);
      setValue('cep', response.data.cep);
      clearErrors('street');
      clearErrors('complement');
      clearErrors('city');
      clearErrors('uf');
      clearErrors('district');
      clearErrors('cep');
    });
  };

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
        <CepSearch>
          <div>
            <Input
              hasError={!!errors.cep?.message}
              type="text"
              width={15}
              placeholder="CEP"
              id="cep"
              {...register('cep')}
            />
            {errors && <Error>{errors.cep?.message}</Error>}
          </div>
          <Button type="button" onClick={searchCep}>
            <MagnifyingGlass size={24} color={defaultTheme['white']} />
          </Button>
        </CepSearch>
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
              type="number"
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
