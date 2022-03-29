import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/profile/reduser';
import { toggleVisible } from '../store/profile/actions';

export const Profile = () => {
  const visible = useSelector((state: RootState) => state.visible);
  const { showName, name } = useSelector((state: RootState) => state);
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
