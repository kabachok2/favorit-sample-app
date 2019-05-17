import React, { Component } from 'react'
import { GoodsFormContainer, GoodsTableContainer, GoodsErrorContainer } from "../../containers"

const style = {
    main: {
        padding: "50px"
    },
    separator: {
        paddingTop: "20px"
    }
}

export default class MainPage extends Component {
    render() {
        return <div style={style.main}>
            <GoodsFormContainer />
            <div style={style.separator}></div>
            <GoodsErrorContainer />
            <div style={style.separator}></div>
            <GoodsTableContainer />
        </div>
    }
}