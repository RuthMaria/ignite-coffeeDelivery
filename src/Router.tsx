import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout';
import { Delivery, Home } from './pages';

/* Todas as rotas que começam com '\' terão o defaultLayout aplicado */

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
};
