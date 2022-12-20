import ACTION_TYPES from '../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { createUserSaga } from './userSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
}

export default rootSaga;
