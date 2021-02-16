import axiosFetch from './axios';

export function signIn(data: any) {
  return axiosFetch({
    url: 'users/signin',
    method: 'POST',
    data
  });
}

export function signUp(data: any) {
  return axiosFetch({
    url: 'users/signup',
    method: 'POST',
    data
  });
}
// аутентификация пользователя на сервере через запрос cookie
export function auth() {
  return axiosFetch({
    url: 'users/auth',
    method: 'GET'
  });
}

export function signOut() {
  return axiosFetch({
    url: 'users/signout',
    method: 'GET'
  });
}

export function checkLogin(login: string) {
  return axiosFetch({
    url: 'users/check-exists',
    method: 'POST',
    data: {
      login: login
    }
  });
}

export function getUserById(id: string) {
  return axiosFetch({
    url: `users/${id}`,
    method: 'GET',
    params: {
      id
    }
  });
}

export function changePassword(data: any) {
  return axiosFetch({
    url: 'users/change/password',
    method: 'PUT',
    data
  });
}
