export const TOGGlE_PROFILE = 'PROFILE::TOGGlE_PROFILE';
export const AUTH_PROFILE = 'PROFILE::IS_AUTH';

export const toggleVisible = {
  type: TOGGlE_PROFILE,
};

export const authProfile = (isAuth: boolean) => ({
  type: AUTH_PROFILE,
  isAuth,
});
