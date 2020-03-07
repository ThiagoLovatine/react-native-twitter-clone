import {call, put, takeEvery, select} from 'redux-saga/effects';
import RestApi from '../../rest';
import {loginError, LOGIN_START, loginSuccess} from '../actions/auth';
import StorageHelper from '../../helpers/storage';
export const getAuthData = state => state.auth;

function* login() {
  try {
    let authData = yield select(getAuthData);
    const auth = yield call(RestApi.Auth.login, authData);
    yield call(StorageHelper.setItem, 'user_token', auth.token);
    yield put(loginSuccess(auth));
  } catch (err) {
    yield put(loginError(err));
  }
}

export const authSaga = [takeEvery(LOGIN_START, login)];
