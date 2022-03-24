import { TOGGlE_PROFILE } from './actions';
import { Reducer, Action } from 'redux';

export interface RootState {
  visible: boolean;
  showName: boolean;
  name: string;
}

const initialState: RootState = {
  visible: false,
  showName: false,
  name: 'User',
};

export const profileReducer: Reducer<RootState, Action> = (
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
