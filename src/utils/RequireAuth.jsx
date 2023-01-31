import { Navigate, useLocation } from 'react-router-dom';

import { LOGIN_URL } from '../constants';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={LOGIN_URL} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
