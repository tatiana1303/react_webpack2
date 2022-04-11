import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileState } from '../store/profile/reducer';
import { toggleVisible } from '../store/profile/actions';

export const Profile = () => {
  const visible = useSelector((state: ProfileState) => state.visible);
  const { showName, name } = useSelector((state: ProfileState) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <input type="checkbox" checked={visible} />
      {showName && <p>{name}</p>}
      <button onClick={() => dispatch(toggleVisible)}>change profile</button>
    </>
  );
};
