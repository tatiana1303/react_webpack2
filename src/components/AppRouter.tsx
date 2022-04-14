import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Chats } from '../pages/Chats';
import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';
import { NavBar } from '../components/NavBar/NavBar';
import { ChatList } from '../components/ChatList/ChatList';
import { Blogs } from '../pages/Blogs';
import { SignIn } from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { SignUp } from '../pages/SignUp';
import { useDispatch } from 'react-redux';
import { authProfile } from '../store/profile/actions';
import { auth, messagesRef } from '../services/firebase';
import { onValue } from 'firebase/database';

export const AppRouter: FC = () => {
  const [msgs, setMsgs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authProfile(true));
      } else {
        dispatch(authProfile(false));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (msgSnap) => {
      const newMsgs: any = {};
      console.log(123, newMsgs);

      msgSnap.forEach((snapshot) => {
        if (snapshot.key) {
          newMsgs[snapshot.key] = Object.values(
            snapshot.val().messageList || {}
          );
        }
      });

      setMsgs(newMsgs);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <PublicRoute restricted={false} exact path="/" component={Main} />
        <PrivateRoute path="/chats">
          <Route exact path="/chats" component={ChatList} />
          <Route path="/chats/:chatId" render={() => <Chats msgs={msgs} />} />
        </PrivateRoute>
        <PrivateRoute path="/profile" component={Profile} />
        <PublicRoute restricted={false} exact path="/blogs" component={Blogs} />
        <PublicRoute
          restricted={true}
          exact
          path="/signin"
          component={SignIn}
        />
        <PublicRoute
          restricted={false}
          exact
          path="/signup"
          component={SignUp}
        />
      </Switch>
    </BrowserRouter>
  );
};
