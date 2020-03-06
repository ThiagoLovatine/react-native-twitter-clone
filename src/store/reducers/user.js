import * as ACTION_TYPES from '../actions/user';

const initialState = {
  data: {},
  loading: true,
  success: false,
  message: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_START: {
      return {
        ...state,
        loading: true,
        error: false,
        data: false,
      };
    }
    case ACTION_TYPES.LOAD_SUCCESS: {
      const newState = {
        ...state,
        data: action.data,
        success: true,
        loading: false,
      };
      return newState;
    }
    case ACTION_TYPES.LOAD_ERROR: {
      return {
        ...state,
        data: action.error,
        loading: false,
        success: false,
      };
    }
    default: {
      return state;
    }
  }
}
