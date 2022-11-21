import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/logo.svg';
import { Container, City, Div, HeaderContent } from './Header.style';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

export const Header: React.FC = () => {
  return (
    <HeaderContent>
      <Container>
        <Link to="/">
          <img src={logo} alt="Copo de café com o logo coffee delivery" />
        </Link>

        <Div>
          <City>
            <MapPin size={22} weight="fill" color={defaultTheme['purple']} />
            <span>Maceió, AL</span>
          </City>

          <Link to="/">
            <div>
              <ShoppingCart
                size={22}
                weight="fill"
                color={defaultTheme['yellow-dark']}
              />
              <div>
                <p>3</p>
              </div>
            </div>
          </Link>
        </Div>
      </Container>
    </HeaderContent>
  );
};
