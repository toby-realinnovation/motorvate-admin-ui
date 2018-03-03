import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { default as rootReducer } from './reducer';
import { default as rootSaga } from './saga';
import { RootState } from '../common';

export const configureStore = (preloadedState: {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const stateString = localStorage.getItem('store');
  const savedStore = stateString && JSON.parse(stateString || '');

  if (savedStore) {
    preloadedState = savedStore;
  }

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(rootSaga, preloadedState);

  store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()));
  });

  return store as Store<RootState>;
};
