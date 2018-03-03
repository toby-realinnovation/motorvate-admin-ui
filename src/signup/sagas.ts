import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { ActionResult } from '../common';
import { Registrant, RegistrationConfirmation } from './models';
import * as api from './api';

function* confirmRegistration(action: ActionResult<RegistrationConfirmation>) {
  const confirmation = action.value || ({} as RegistrationConfirmation);
  try {
    yield call(
      api.confirmRegistration,
      confirmation.username,
      confirmation.code
    );
    yield put(actions.confirmRegistrationSuccess(confirmation));
  } catch (error) {
    yield put(actions.confirmRegistrationFailure(confirmation, error));
  }
}

function* registerUser(action: ActionResult<Registrant>) {
  const registrant = action.value || ({} as Registrant);
  const { email, birthdate, gender, name, phoneNumber, password } = registrant;
  try {
    const newUser = yield call(
      api.register,
      email,
      birthdate,
      gender,
      name,
      phoneNumber,
      password
    );
    yield put(actions.registerUserSuccess(newUser));
  } catch (error) {
    yield put(actions.registerUserFailure(registrant, error));
  }
}

function* watchForConfirmRegistration() {
  yield takeEvery(actions.CONFIRM_REGISTRATION, confirmRegistration);
}

function* watchForRegisterUser() {
  yield takeEvery(actions.REGISTER_USER, registerUser);
}

export default function* root() {
  yield all([fork(watchForRegisterUser), fork(watchForConfirmRegistration)]);
}
