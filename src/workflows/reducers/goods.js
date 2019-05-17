const initialState = {
    items: []
};

const goods = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GOODS_SUCCESS':
            return {
                ...state,
                items: action.payload || [],
                error: ""
            }
        case 'GET_GOODS_FAILEDS':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default goods