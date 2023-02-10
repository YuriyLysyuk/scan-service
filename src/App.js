import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import router from './router/router';
import { isAccessTokenExpire } from './utils/helpers';
import { useAuth } from './hooks/useAuth';
import { logout } from './redux/slices/authSlice';

const App = () => {
  const { expire } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAccessTokenExpire(expire)) {
      dispatch(logout());
    }
  }, [expire, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
