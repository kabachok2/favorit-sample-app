import { call, put, takeEvery } from 'redux-saga/effects'
import goodsApi from '../../api/goods'
import { goodsActions } from "../actions"

function* getGoodsHandler(action) {
    try {
        const goods = yield call(() => goodsApi.getGoods(action.payload));
        yield put(goodsActions.getGoodsSuccess(goods));
    } catch (e) {
        console.log(e)
        yield put(goodsActions.getGoodsFailed(e));
    }
}

function* getGoods() {
    yield takeEvery("GET_GOODS", getGoodsHandler);
}

export default [
    getGoods
]