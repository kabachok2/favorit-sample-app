export const getGoods = ({ number, brand, showAnalogues }) => ({
    type: "GET_GOODS",
    payload: { number, brand, showAnalogues }
})

export const getGoodsFailed = () => ({
    type: "GET_GOODS_FAILED"
})

export const getGoodsSuccess = ({ goods }) => ({
    type: "GET_GOODS_SUCCESS",
    payload: goods
})