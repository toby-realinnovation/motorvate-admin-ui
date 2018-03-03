import { AuthState } from '../../auth';
import { SignupState } from '../../signup';
import { UsersState } from '../../users';

export interface RootState {
  auth: AuthState;
  signup: SignupState;
  users: UsersState;
}
