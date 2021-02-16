export const APPLICATION_AUTH = 'APPLICATION_AUTH';
export const APPLICATION_SIGN_OUT = 'APPLICATION_SIGN_OUT';

interface Auth {
  type: typeof APPLICATION_AUTH
  payload: User
}

interface SignOut {
  type: typeof APPLICATION_SIGN_OUT
  meta: {
    timestamp: number
  }
}

export interface User {
    user: any
}

export type MainActionTypes = Auth | SignOut

export interface MainState {
    user: User
}
