import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HOME_URL, LOGIN_URL } from './constants';
import { store } from './redux/store';
import UIPage from './pages/UIPage/UIPage';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path={HOME_URL} element={<MainPage />} />

          <Route path={LOGIN_URL} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
