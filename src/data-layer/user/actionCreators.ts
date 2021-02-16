import API from 'src/api';
import {Dispatch} from 'redux';
import {push} from 'connected-react-router';
import * as actionTypes from './actionTypes';
import {
  IUserData,
  UserAction
} from './types';

export function pushAction(to: string) {
  return function(dispatch: Dispatch) {
    dispatch(push(to));
  };
}

export function signIn(data: IUserData) {
  return async function(dispatch: Dispatch) {
    try {
      const response = await API.user.signIn(data);
      const action: UserAction = {
        type: actionTypes.SIGN_IN_SUCCESS,
        user: response.data
      };
      dispatch(action);
      dispatch(push('/'));
    } catch (error) {
      const action = {
        type: actionTypes.SIGN_IN_FAIL,
        error
      };
      dispatch(action);
    }
  };
}

export function signOut() {
  return async function(dispatch: Dispatch) {
    try {
      // const response = await API.user.signOut();
      const action: UserAction = {
        type: actionTypes.SIGN_OUT_SUCCESS,
        user: null
      };
      dispatch(action);
      dispatch(push('/'));
    } catch (error) {
      const action = {
        type: actionTypes.SIGN_OUT_FAIL,
        error
      };
      dispatch(action);
    }
  };
}
