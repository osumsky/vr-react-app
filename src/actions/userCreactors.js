import ACTIONS_TYPES from './actionTypes';

// CREATE USER
export const createUserRequest = (values) => ({
  type: ACTIONS_TYPES.CREATE_USER_REQUEST,
  values,
});

export const createUserSuccess = (values) => ({
  type: ACTIONS_TYPES.CREATE_USER_SUCCESS,
  values,
});

export const createUserError = (error) => ({
  type: ACTIONS_TYPES.CREATE_USER_ERROR,
  error,
});

// GET USERS
export const getUsersRequest = ({ limit, offset }) => ({
  type: ACTIONS_TYPES.GET_USERS_REQUEST,
  payload: { limit, offset },
});

export const getUsersSuccess = ({ users }) => ({
  type: ACTIONS_TYPES.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersError = ({ error }) => ({
  type: ACTIONS_TYPES.GET_USERS_ERROR,
  payload: { error },
});
