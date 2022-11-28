import { Coffee } from 'phosphor-react';
import React from 'react';
import { coffees } from '../../data/coffee';
import { Banner } from './components/Banner/Banner';
import { CoffeeCard } from './components/CoffeeCard/CoffeeCard';

import { Title, Section, Content } from './Home.style';

export const Home: React.FC = () => {
  return (
    <div>
      <Banner />

      <Content>
        <Title>Nossos cafés</Title>

        <Section>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </Section>
      </Content>
    </div>
  );
};
