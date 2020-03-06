import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from './reactotron';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = __DEV__
  ? createSagaMiddleware({sagaMonitor})
  : createSagaMiddleware({sagaMonitor});
const middlewares = [sagaMiddleware];
const middleware = applyMiddleware(...middlewares);

const store = createStore(
  reducers,
  compose(
    middleware,
    Reactotron.createEnhancer(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
