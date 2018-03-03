import { ActionResult } from '../common';
import { AuthInfo } from './models';

export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'auth/SIGN_IN_FAILURE';

export const signIn = (authInfo: AuthInfo): ActionResult<AuthInfo> => {
  return {
    type: SIGN_IN,
    value: authInfo
  };
};

export const signInSuccess = (): ActionResult<{}> => {
  return {
    type: SIGN_IN_SUCCESS
  };
};

export const signInFailure = (e: Error): ActionResult<Error> => {
  return {
    type: SIGN_IN_FAILURE,
    value: e
  };
};
