import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { StoreState } from '../store';
import { toggleVisible } from '../store/profile/actions';
import { getProfileVisible } from '../store/profile/selectors';
import { onValue, set } from 'firebase/database';
import { userRef } from './../services/firebase';

export const Profile: FC<RouteComponentProps> = () => {
  const visible = useSelector(getProfileVisible);
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const user = snapshot.val();
      setName(user.name || '');
    });
    return unsubscribe;
  }, []);

  const handleChangeName = () => {
    set(userRef, {
      name,
    });
  };

  return (
    <>
      <h2>Profile page</h2>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChangeName}>change name</button>

      <input
        type="checkbox"
        checked={visible}
        onChange={() => dispatch(toggleVisible)}
      />
      <p>{name}</p>
      {isAuth ? (
        <button onClick={() => logOut()}>signout</button>
      ) : (
        <Link to="/signin">
          <button>signin</button>
        </Link>
      )}
    </>
  );
};
