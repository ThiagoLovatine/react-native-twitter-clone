import {call, put, takeEvery} from 'redux-saga/effects';
import RestApi from '../../rest';

import {loadError, LOAD_START, loadSuccess} from '../actions/user';

function* userInfo() {
  try {
    const user = yield call(RestApi.User.info);
    yield put(loadSuccess(user));
  } catch (err) {
    yield put(loadError(err));
  }
}

export const userSaga = [takeEvery(LOAD_START, userInfo)];
