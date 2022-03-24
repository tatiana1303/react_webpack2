/* eslint-disable linebreak-style */

import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Chats } from './pages/Chats';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { NavBar } from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './store/index';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/chats">
            <Route exact path="/chats">
              <Redirect to="/chats/1" />
            </Route>
            <Route path="/chats/:chatId" component={Chats} />
          </Route>
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
