import { createStore, applyMiddleware, Store } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { TState } from 'store/i';
import { reducer } from 'store/reducer';
import rootSaga from 'store/rootSaga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<TState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    bindMiddleware([sagaMiddleware]),
  ) as SagaStore;

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<TState>(makeStore);
