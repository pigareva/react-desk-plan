import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { INITIAL_STATE } from './consts';

const vanillaPromise = store => next => (action) => {
  if (typeof action.then !== 'function') {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(vanillaPromise));

const store = createStore(rootReducer, INITIAL_STATE, enhancer);

export default store;
