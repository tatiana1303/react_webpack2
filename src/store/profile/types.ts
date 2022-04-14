import { AUTH_PROFILE, TOGGlE_PROFILE } from './actions';

export type ProfileAction = AuthProfile | ToggleProfile;

export interface AuthProfile {
  type: typeof AUTH_PROFILE;
  isAuth: boolean;
}

export type ToggleProfile = {
  type: typeof TOGGlE_PROFILE;
  visible: boolean;
  showName: boolean;
  name: string;
};
