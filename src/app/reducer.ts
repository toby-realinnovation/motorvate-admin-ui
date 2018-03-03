import { combineReducers } from 'redux';
import { authReducer } from '../auth';
import { signupReducer } from '../signup';
import { usersReducer } from '../users';

export default combineReducers({
  authReducer,
  signupReducer,
  usersReducer
});
