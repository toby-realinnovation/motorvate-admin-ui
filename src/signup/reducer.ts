import { ActionResult } from '../common';
// import { ActionType } from './actions';
import { SignupState } from './models';

const initialState = (): SignupState => {
  return {
    isBusy: false,
    items: []
  };
};

const reducer = (
  state: SignupState = initialState(),
  action: ActionResult<{}>
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
