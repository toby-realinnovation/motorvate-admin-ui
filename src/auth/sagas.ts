import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { ActionResult } from '../common';
import { AuthInfo } from './models';
import * as api from './api';

function* signIn(action: ActionResult<AuthInfo>) {
  const authInfo = action.value || ({} as AuthInfo);
  const { username, password } = authInfo;
  try {
    yield call(api.authenticate, username, password);
    yield put(actions.signInSuccess());
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

function* watchForSignIn() {
  yield takeEvery(actions.SIGN_IN, signIn);
}

export default function* root() {
  yield all([fork(watchForSignIn)]);
}
