import React from 'react';
import { Provider } from 'react-redux';

import UIPage from './pages/UIPage/UIPage';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Provider store={store}>
    </Provider>
  );
};

export default App;
