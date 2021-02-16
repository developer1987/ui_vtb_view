import {
  APPLICATION_AUTH,
  APPLICATION_SIGN_OUT,
  MainState,
  MainActionTypes
} from './types';

const initState: MainState = {
  user: null
};

export default function appReducer(state = initState, action: MainActionTypes) {
  switch (action.type) {
    case APPLICATION_AUTH:
      return ({
        ...state,
        user: action.payload
      });
    case APPLICATION_SIGN_OUT:
      return ({
        ...state,
        user: null
      });
    default:
      return state;
  }
}
