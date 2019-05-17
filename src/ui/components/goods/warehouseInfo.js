import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import moment from "moment"

const style = {
    noDispay: {
        display: "none"
    },
    label: {
        paddingBottom: "10px"
    }
}

export default class WarehouseInfo extends Component {

    getRowItem = ({ id, code, shipmentDate, stock }) =>
        <tr key={id}>
            <td>{id}</td>
            <td>{code}</td>
            <td >{moment(shipmentDate).format("DD.MM.YYYY HH:MM:SS")}</td>
            <td>{stock}</td>
        </tr>


    render() {
        const { id, items = [] } = this.props

        return (
            <tr id={id} style={style.noDispay}>
                <td colSpan="7">
                    <div style={style.main}>
                        <div style={style.label}> Информация по наличию на складах</div>
                        < div >
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Код</th>
                                        <th>Дата выгрузки</th>
                                        <th>Остаток на складе</th>
                                    </tr>
                                </thead>
                                <tbody key={id}>
                                    {items.map(item => this.getRowItem(item))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </td>
            </tr >
        )
    }
}