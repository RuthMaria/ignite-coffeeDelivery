import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

/* Todas as rotas que começam com '\' terão o defaultLayout aplicado */

export const Router: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<DefaultLayout />}> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/history" element={<History />} />
      </Route> */}
    </Routes>
  );
};
