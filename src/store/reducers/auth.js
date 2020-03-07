import * as ACTION_TYPES from '../actions/auth';

const initialState = {
  data: {},
  loading: true,
  success: false,
  message: false,
  uid: false,
  password: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_START: {
      return {
        ...state,
        loading: true,
        error: false,
        data: false,
        uid: action.data.uid,
        password: action.data.password,
      };
    }
    case ACTION_TYPES.LOGIN_SUCCESS: {
      const newState = {
        ...state,
        data: action.data,
        success: true,
        loading: false,
        uid: false,
        password: false,
      };
      return newState;
    }
    case ACTION_TYPES.LOGIN_ERROR: {
      return {
        ...state,
        data: action.error,
        loading: false,
        success: false,
        uid: false,
        password: false,
      };
    }
    default: {
      return state;
    }
  }
}
