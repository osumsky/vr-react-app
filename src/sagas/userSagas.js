import { put } from '@redux-saga/core/effects';
import * as API from '../api';
import * as UserActionCreators from '../actions/userCreactors';

export function* createUserSaga(action) {
  try {
    const {
      data: {
        data: [user],
      },
    } = yield API.createUser(action.values);
    // First "data" is response from axios,
    // second "data" is our response from our server
    yield put(UserActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(UserActionCreators.createUserError(error));
  }
}

