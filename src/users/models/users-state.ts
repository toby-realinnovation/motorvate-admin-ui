import { User } from './user';

export interface UsersState {
  isBusy: boolean;
  items: Array<User>;
  error?: Error;
}
