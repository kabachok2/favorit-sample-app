import { fork, all } from 'redux-saga/effects'
import goodsSagas from './goods'

const resultSagasArray = [
    ...goodsSagas,
]

export default function* root() {
    yield all(resultSagasArray.map(saga => fork(saga)))
}
