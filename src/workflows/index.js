import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
const rootReducer = combineReducers({
    goods
})

export default function createReduxStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    store.runSaga = sagaMiddleware.run()
    return store
}
