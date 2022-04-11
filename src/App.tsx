/* eslint-disable linebreak-style */

import React, { FC } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/index';

export interface Message {
  id: string;
  text: string;
  author: string;
}

export interface Chat {
  id: string;
  autor: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter></AppRouter>
      </PersistGate>
    </Provider>
  );
};
