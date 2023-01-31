import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { HOME_URL, LOGIN_URL, SEARCH_URL } from './constants';
import RequireAuth from './utils/RequireAuth';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route index path={HOME_URL} element={<MainPage />} />
      <Route path={LOGIN_URL} element={<LoginPage />} />

      <Route
        path={SEARCH_URL}
        element={
          <RequireAuth>
            <SearchPage />
          </RequireAuth>
        }
      ></Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
