import * as ACTION_TYPES from '../actions/auth';

const initialState = {
  user: false,
  loading: false,
  error: false,
};

export default function client(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_START: {
      return {
        ...state,
        loading: true,
        error: false,
        user: false,
      };
    }
    case ACTION_TYPES.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
        error: false,
      };
    }
    case ACTION_TYPES.LOGIN_ERROR: {
      return {
        ...state,
        user: false,
        loading: false,
        error: true,
        message: action.message,
      };
    }
    default: {
      return state;
    }
  }
}
