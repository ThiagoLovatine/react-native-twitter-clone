export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    user: data,
  };
}

export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    message: err,
  };
}
