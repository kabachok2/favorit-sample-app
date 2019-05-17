import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoodsForm } from '../../components';
import { goodsActions } from '../../../workflows/actions'

const mapDispatchToProps = dispatch => ({
    getGoods: (data) => dispatch(goodsActions.getGoods(data))
})

class GoodsFormContainer extends Component {

    onClickHandler = data => {
        this.props.getGoods(data);
    }

    render() {
        const { onClickHandler } = this

        return <GoodsForm onClick={onClickHandler} />
    }
}

export default connect(
    null,
    mapDispatchToProps
)(GoodsFormContainer)