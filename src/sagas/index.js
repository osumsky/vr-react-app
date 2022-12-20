import ACTION_TYPES from '../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { createUserSaga, getAllUsersSaga } from './userSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getAllUsersSaga);
}

export default rootSaga;
