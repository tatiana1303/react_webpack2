import { TOGGlE_PROFILE } from './actions';
import { Reducer } from 'redux';

export interface ProfileState {
  visible: boolean;
  showName: boolean;
  name: string;
}
export interface ProfileAction {
  type: string;
}

const initialState: ProfileState = {
  visible: false,
  showName: false,
  name: 'User',
};

export const profileReducer: Reducer<ProfileState, ProfileAction> = (
  state = initialState,
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
    default: {
      return state;
    }
  }
};
