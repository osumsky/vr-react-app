import produce from 'immer';
import ACTIONS_TYPES from '../actions/actionTypes';

const initValues = {
  users: [],
  isFetching: false,
  error: null,
};

const handlerRequest = produce((draftState, action) => {
  draftState.isFetching = true;
});

const handlerError = produce((draftState, action) => {
  const {
    payload: { error },
  } = action;
  draftState.isFetching = false;
  draftState.error = error;
});

const handlers = {
  // REQUESTS
  [ACTIONS_TYPES.GET_USERS_REQUEST]: handlerRequest,
  [ACTIONS_TYPES.CREATE_USER_REQUEST]: handlerRequest,

  // SUCCESSES
  [ACTIONS_TYPES.GET_USERS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { users: newUsers },
    } = action;
    draftState.isFetching = false;
    draftState.users.push(...newUsers);
  }),

  [ACTIONS_TYPES.CREATE_USER_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { user },
    } = action;
    draftState.isFetching = false;
    draftState.users.push(user);
  }),

  // ERRORS
  [ACTIONS_TYPES.GET_USERS_ERROR]: handlerError,
  [ACTIONS_TYPES.CREATE_USER_ERROR]: handlerError,

  // CLEAR ERRORS
  [ACTIONS_TYPES.CLEAR_USER_ERROR]: produce((draftState, action) => {
    draftState.error = null;
  }),
};

const userReducer = (state = initValues, action) => {
  const { type } = action;
  const handler = handlers[type];
  if (handler) return handler(state, action);
  return state;
};

export default userReducer;
