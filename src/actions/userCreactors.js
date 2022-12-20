import ACTIONS_TYPES from './actionTypes';

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
