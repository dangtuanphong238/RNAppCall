import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from './Reducers'
import rootSaga from '../Sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
