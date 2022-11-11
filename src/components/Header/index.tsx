import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import shoppingCart from '../../assets/shoppingCart.svg';
import mapPin from '../../assets/mapPin.svg';
import { Container, City, Div } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Copo de café com o logo coffee delivery" />
      </Link>

      <Div>
        <City>
          <img src={mapPin} alt="Sinalização de localização" />
          <span>Maceió, AL</span>
        </City>

        <Link to="/">
          <div>
            <img src={shoppingCart} alt="Carrinho de compras de supermercado" />

            <div>
              <p>3</p>
            </div>
          </div>
        </Link>
      </Div>
    </Container>
  );
};
