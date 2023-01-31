import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { HOME_URL, LOGIN_URL, SEARCH_URL } from './constants';
import RequireAuth from './utils/RequireAuth';
import { isAccessTokenExpire } from './utils/helpers';
import { useAuth } from './hooks/useAuth';
import { logout } from './redux/slices/authSlice';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  const { expire } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAccessTokenExpire(expire)) {
      dispatch(logout());
    }
  }, [expire, dispatch]);

  return (
    <Routes>
      <Route index path={HOME_URL} element={<MainPage />} />
      <Route path={LOGIN_URL} element={<LoginPage />} />

      <Route path={SEARCH_URL} element={<RequireAuth />}>
        <Route index element={<SearchPage />} />
        <Route path="result" element={<SearchResultPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
