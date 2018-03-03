import { ActionResult } from '../common';
import { User } from './models';

export namespace ActionType {
  export const FETCH_ALL_USERS = 'users/FETCH_ALL_USERS';
  export const FETCH_ALL_USERS_SUCCESS = 'users/FETCH_ALL_USERS_SUCCESS';
  export const FETCH_ALL_USERS_FAILURE = 'users/FETCH_ALL_USERS_FAILURE';
}

export const fetchAllUsers = (): ActionResult<{}> => {
  return {
    type: ActionType.FETCH_ALL_USERS
  };
};

export const fetchAllUsersSuccess = (
  users: Array<User>
): ActionResult<Array<User>> => {
  return {
    type: ActionType.FETCH_ALL_USERS_SUCCESS,
    value: users
  };
};

export const fetchAllUsersFailure = (error: Error): ActionResult<Error> => {
  return {
    type: ActionType.FETCH_ALL_USERS_FAILURE,
    value: error
  };
};
