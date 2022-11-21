import React from 'react';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { IconCircle } from '../../components';
import { defaultTheme } from '../../styles/themes/default';
import illustration from '/assets/illustration.svg';

import {
  Card,
  Container,
  Prediction,
  Subtitle,
  Title,
} from './DeliveryConfirmation.style';

export const DeliveryConfirmation: React.FC = () => {
  return (
    <Container>
      <aside>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>

        <Card>
          <Prediction>
            <IconCircle color="purple">
              <MapPin size={16} weight="fill" color={defaultTheme['white']} />
            </IconCircle>
            <div>
              Entrega em <span>Rua João Daniel Martinelli, 102</span>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </Prediction>

          <Prediction>
            <IconCircle color="yellow">
              <Timer size={16} weight="fill" color={defaultTheme['white']} />
            </IconCircle>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </Prediction>

          <Prediction>
            <IconCircle color="yellowDark">
              <CurrencyDollar
                size={16}
                weight="fill"
                color={defaultTheme['white']}
              />
            </IconCircle>
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </Prediction>
        </Card>
      </aside>

      <img src={illustration} alt="" />
    </Container>
  );
};
