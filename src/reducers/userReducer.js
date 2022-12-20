import ACTIONS_TYPES from '../actions/actionTypes';

const initValues = {
  users: [],
  isFetching: false,
  error: null,
};

const userReducer = (state = initValues, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.CREATE_USER_REQUEST:
      return { ...state, isFetching: true };

    case ACTIONS_TYPES.CREATE_USER_SUCCESS:
      const { values: user } = action;
      return { ...state, isFetching: false, users: [...state.users, user] };

    case ACTIONS_TYPES.CREATE_USER_ERROR:
      const { error } = action;
      return { ...state, isFetchin: false, error };

    default:
      return state;
  }
};

export default userReducer;
