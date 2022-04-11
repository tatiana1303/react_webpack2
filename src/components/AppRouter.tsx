import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Chats } from '../pages/Chats';
import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';
import { NavBar } from '../components/NavBar/NavBar';
import { ChatList } from '../components/ChatList/ChatList';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/chats">
        <Route exact path="/chats" component={ChatList} />
        <Route path="/chats/:chatId" component={Chats} />
      </Route>
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
