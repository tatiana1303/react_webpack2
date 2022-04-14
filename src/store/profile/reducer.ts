import { AUTH_PROFILE, TOGGlE_PROFILE } from './actions';
import { Reducer } from 'redux';
import { ProfileAction } from './types';

export interface ProfileState {
  visible: boolean;
  showName: boolean;
  name: string;
  isAuth: boolean;
}
const initialProfile: ProfileState = {
  visible: false,
  showName: false,
  name: 'User',
  isAuth: false,
};

export const profileReducer: Reducer<ProfileState, ProfileAction> = (
  state = initialProfile,
  action
) => {
  switch (action.type) {
    case TOGGlE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
        showName: !state.showName,
      };
    }
    case AUTH_PROFILE: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    default: {
      return state;
    }
  }
};
