import { ActionResult } from '../common';
import { ActionType } from './actions';
import { UsersState } from './models';

const initialState = (): UsersState => {
  return {
    isBusy: false,
    items: []
  };
};

const reducer = (
  state: UsersState = initialState(),
  action: ActionResult<{}>
) => {
  switch (action.type) {
    case ActionType.FETCH_ALL_USERS:
      return {
        ...state,
        isBusy: true,
        error: null
      };

    case ActionType.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        isBusy: false,
        error: null,
        items: action.value
      };

    case ActionType.FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        isBusy: false,
        error: action.value
      };

    default:
      return state;
  }
};

export default reducer;
