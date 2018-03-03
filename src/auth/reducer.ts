import { ActionResult } from '../common';
// import { ActionType } from './actions';
import { AuthState } from './models';

const initialState = (): AuthState => {
  return {
    isBusy: false,
    items: []
  };
};

const reducer = (
  state: AuthState = initialState(),
  action: ActionResult<{}>
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
