import React, { Component } from 'react'
import { Alert } from 'react-bootstrap';

const style = {
    main: {
        padding: "10px"
    },
}

export default class GoodsError extends Component {

    render() {
        const { text } = this.props

        return (
            <div style={style.main}>
                {text &&
                    <Alert key="error" variant="danger">
                        {text}
                    </Alert>
                }
            </div>)
    }
}