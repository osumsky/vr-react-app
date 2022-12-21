import ACTIONS_TYPES from './actionTypes';

// CREATE USER
export const createUserRequest = ({ values }) => ({
  type: ACTIONS_TYPES.CREATE_USER_REQUEST,
  payload: { values },
});

export const createUserSuccess = ({ user }) => ({
  type: ACTIONS_TYPES.CREATE_USER_SUCCESS,
  payload: { user },
});

export const createUserError = ({ error }) => ({
  type: ACTIONS_TYPES.CREATE_USER_ERROR,
  payload: { error },
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

export const clearUserError = () => ({
  type: ACTIONS_TYPES.CLEAR_USER_ERROR,
});
