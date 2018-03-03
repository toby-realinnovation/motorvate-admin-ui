import { all, fork } from 'redux-saga/effects';
import { authSagas } from '../auth';
import { signupSagas } from '../signup';
import { usersSagas } from '../users';

export default function* root(preloadedState: {}) {
  yield all([fork(authSagas), fork(signupSagas), fork(usersSagas)]);
}
