import { createBrowserRouter } from 'react-router-dom';

import { getFormValues } from './actions';

import {
  HOME_URL,
  LOGIN_URL,
  SEARCH_URL,
  SEARCH_RESULT_URL,
} from '../constants';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import SearchResultPage from '../pages/SearchResultPage/SearchResultPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import RequireAuth from '../components/RequireAuth/RequireAuth';

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: LOGIN_URL,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: SEARCH_URL,
    element: <RequireAuth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: SEARCH_URL,
        element: <SearchPage />,
      },
      {
        path: SEARCH_RESULT_URL,
        element: <SearchResultPage />,
        action: getFormValues,
      },
    ],
  },
]);

export default router;
