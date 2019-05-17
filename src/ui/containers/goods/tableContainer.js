import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoodsTable } from '../../components';

const mapStateToProps = (state, ownProps) => ({
    items: state.goods.items
})

class TableContainer extends Component {

    onClickHandler = () => {
        this.getGoods()
    }

    isItemsEmpty = (items) => {  // Фикс для случая, когда деталь не найдена, но сервер почему-то возвращает одну пустую запись 0_0
        return items && items.length === 1 && items[0].goodsID === "00000000-0000-0000-0000-000000000000"
    }

    render() {
        const items = this.isItemsEmpty(this.props.items) ? [] : this.props.items

        return (
            <GoodsTable items={items} />
        )
    }
}

export default connect(
    mapStateToProps
)(TableContainer)