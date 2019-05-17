import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import goods from "./goods"
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    goods
})

export default function createReduxStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    store.runSaga = sagaMiddleware.run

    return store
}
