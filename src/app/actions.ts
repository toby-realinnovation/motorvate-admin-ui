import { ActionResult } from '../common';

export const APP_INIT = 'app/INIT';

export const appInit = (preloadedState: {}): ActionResult<{}> => {
  return {
    type: APP_INIT,
    value: preloadedState
  };
};
