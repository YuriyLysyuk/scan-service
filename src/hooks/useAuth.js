import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsLoggedIn,
  selectAccessTokenExpire,
} from '../redux/slices/authSlice';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectCurrentUser);
  const expire = useSelector(selectAccessTokenExpire);

  return useMemo(
    () => ({ isLoggedIn, user, expire }),
    [isLoggedIn, user, expire]
  );
};
