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
        <Input type="text" placeholder="Rua" />

        <Complement>
          <Input type="text" placeholder="Número" />
          <Input type="text" placeholder="Complemento" />
          <Optional>Opcional</Optional>
        </Complement>

        <Div>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </Div>
      </Address>
    </Content>
  );
};
