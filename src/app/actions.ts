import API from 'src/api';
import {Dispatch} from 'redux';
import {
  APPLICATION_AUTH,
  APPLICATION_SIGN_OUT
} from './types';

export const auth = () => {
  return async function(dispatch: Dispatch) {
    try {
      const response = await API.user.auth();
      dispatch({type: APPLICATION_AUTH, payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = () => {
  return async function(dispatch: Dispatch) {
    try {
      const response = await API.user.signOut();

      dispatch({type: APPLICATION_SIGN_OUT, payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };
};
