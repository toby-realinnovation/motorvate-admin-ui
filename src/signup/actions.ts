import { ActionResult } from '../common';
import { Registrant, RegistrationConfirmation } from './models';

export const REGISTER_USER = 'signup/REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'signup/REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'signup/REGISTER_USER_FAILURE';

export const registerUser = (
  registrant: Registrant
): ActionResult<Registrant> => {
  return {
    type: REGISTER_USER,
    value: registrant
  };
};

export const registerUserSuccess = (
  registrant: Registrant
): ActionResult<Registrant> => {
  return {
    type: REGISTER_USER_SUCCESS,
    value: registrant
  };
};

export const registerUserFailure = (
  registrant: Registrant,
  error: Error
): ActionResult<{}> => {
  return {
    type: REGISTER_USER_FAILURE,
    value: {
      registrant,
      error
    }
  };
};

export const CONFIRM_REGISTRATION = 'signup/CONFIRM_REGISTRATION';
export const CONFIRM_REGISTRATION_SUCCESS =
  'signup/CONFIRM_REGISTRATION_SUCCESS';
export const CONFIRM_REGISTRATION_FAILURE =
  'signup/CONFIRM_REGISTRATION_FAILURE';

export const confirmRegistration = (
  confirmation: RegistrationConfirmation
): ActionResult<RegistrationConfirmation> => {
  return {
    type: CONFIRM_REGISTRATION,
    value: confirmation
  };
};

export const confirmRegistrationSuccess = (
  confirmation: RegistrationConfirmation
): ActionResult<RegistrationConfirmation> => {
  return {
    type: CONFIRM_REGISTRATION_SUCCESS,
    value: confirmation
  };
};

export const confirmRegistrationFailure = (
  confirmation: RegistrationConfirmation,
  error: Error
): ActionResult<RegistrationConfirmation> => {
  confirmation.error = error.message;
  return {
    type: CONFIRM_REGISTRATION_FAILURE,
    value: confirmation
  };
};
