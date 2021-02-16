import {Dispatch} from 'redux';
import {push, goBack} from 'connected-react-router';

export function pushAction(to: string) {
  return function(dispatch: Dispatch) {
    dispatch(push(to));
  };
}

export function goBackAction() {
  return function(dispatch: Dispatch) {
    return new Promise<void>(function(resolve) {
      dispatch(goBack());
      resolve();
    });
  };
}
