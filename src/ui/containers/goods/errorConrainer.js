import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoodsError } from '../../components';

const mapStateToProps = (state, ownProps) => ({
    error: state.goods.error
})

class GoodsErrorContainer extends Component {

    render() {
        const { error } = this.props

        return <GoodsError text={error} />
    }
}

export default connect(
    mapStateToProps
)(GoodsErrorContainer)