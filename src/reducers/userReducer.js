import ACTIONS_TYPES from '../actions/actionTypes';

const initValues = {
  users: [],
  isFetching: false,
  error: null,
};

const userReducer = (state = initValues, action) => {
  switch (action.type) {
    // GET_USERS
    case ACTIONS_TYPES.GET_USERS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }

    case ACTIONS_TYPES.GET_USERS_SUCCESS: {
      const {
        payload: { users: newUsers },
      } = action;
      return {
        ...state,
        users: [...state.users, ...newUsers],
        isFetching: false,
        error: null,
      };
    }

    case ACTIONS_TYPES.GET_USERS_ERROR: {
      const {
        payload: { error },
      } = action;
      return { ...state, isFetching: false, error };
    }

    // CREATE_USER
    case ACTIONS_TYPES.CREATE_USER_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }

    case ACTIONS_TYPES.CREATE_USER_SUCCESS: {
      const { values: user } = action;
      return {
        ...state,
        users: [...state.users, user],
        isFetching: false,
        error: null,
      };
    }

    case ACTIONS_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return { ...state, isFetching: false, error };
    }

    default:
      return state;
  }
};

export default userReducer;
