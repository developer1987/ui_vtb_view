import {AxiosResponse} from 'axios';

export interface IUser {
  id: number
  login: string
  name: string
  middlename: string
  surname: string
}

export interface IUserData {
  login: string
  password: string
}

export type UserAction = {
  type: string
  user: AxiosResponse
}

export type UserState = {
  user: AxiosResponse
}
// export type DispatchType = (args: UserAction) => UserAction
