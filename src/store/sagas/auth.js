import {call, put, takeEvery} from 'redux-saga/effects';
import RestApi from '../../rest';

import {LOGIN_START, loginSuccess, loginError} from '../actions/auth';

export const getClient = state => state.client;

function* login() {
  try {
    const user = yield call(RestApi.Auth.login, 'user_token');
    yield put(loginSuccess(user));
  } catch (response) {
    yield put(loginError(response));
  }
}

export const authSaga = [takeEvery(LOGIN_START, login)];
