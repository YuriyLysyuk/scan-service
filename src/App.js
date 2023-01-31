import React from 'react';

import { HOME_URL, LOGIN_URL } from './constants';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route index path={HOME_URL} element={<MainPage />} />
      <Route path={LOGIN_URL} element={<LoginPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
