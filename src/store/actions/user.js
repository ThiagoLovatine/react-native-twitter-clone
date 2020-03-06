export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_ERROR = 'LOAD_ERROR';

export function loadStart() {
  return {
    type: LOAD_START,
  };
}

export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    data,
  };
}

export function loadError(err) {
  return {
    type: LOAD_ERROR,
    message: err,
  };
}

const UserActions = {
  loadStart,
  loadSuccess,
  loadError,
};

export default UserActions;
