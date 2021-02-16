import * as actionTypes from './actionTypes';
import {
  UserState,
  UserAction
} from './types';

const initialState: UserState = {
  user: null
};

const userReducer = (
    state: UserState = initialState,
    action: UserAction
): UserState => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: action.user
      };
  }
  return state;
};

export default userReducer;
