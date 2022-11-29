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

export const AddressForm: React.FC = () => {
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
        <Input type="text" width={15} placeholder="CEP" />
        <Error>Informe o CEP</Error>
        <Input type="text" placeholder="Rua" />
        <Error>Informe o Rua</Error>
        <Complement>
          <div>
            <Input type="text" placeholder="Número" />
            <Error>Informe o número</Error>
          </div>
          <div>
            <Input type="text" placeholder="Complemento" />
            <Optional>Opcional</Optional>
          </div>
        </Complement>

        <Div>
          <div>
            <Input type="text" placeholder="Bairro" />
            <Error>Informe o bairro</Error>
          </div>
          <div>
            <Input type="text" placeholder="Cidade" />
            <Error>Informe o cidade</Error>
          </div>
          <div>
            <Input type="text" placeholder="UF" />
            <Error>Informe o UF</Error>
          </div>
        </Div>
      </Address>
    </Content>
  );
};
