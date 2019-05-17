import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import WarehouseInfo from './warehouseInfo';

const style = {
    coloredRow: {
        backgroundColor: "#d4edda"
    },
    emtyBlock: {
        display: "flex",
        justifyContent: "center"
    }
}
export default class GoodsTable extends Component {

    getTableRow = (item) =>
        [
            this.getItemRow(item),
            <WarehouseInfo key={item.goodsID + "hidden"} id={item.goodsID} items={item.warehouses} />
        ]

    getItemRow = ({ goodsID, number, brand, name, count, price, warehouses, analogues }) => {
        return (
            <tr
                key={goodsID}
                style={analogues ? style.coloredRow : {}}
                onClick={() => this.toggleWarehouseInfo(goodsID, warehouses.length)}
            >
                <td>{number}</td>
                <td>{brand}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{price}</td>
            </tr>)
    }


    toggleWarehouseInfo = (id, warehousesLength) => {
        const element = document.getElementById(id);

        if (element) {
            element.style.display = element.style.display === "none" && warehousesLength !== 0 ? "table-row" : "none"
        }
    }

    render() {
        const { items } = this.props
        const { getTableRow } = this;

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Бренд</th>
                            <th>Название</th>
                            <th>Количество</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item =>
                            item.analogues
                                ?
                                [
                                    getTableRow(item),
                                    ...item.analogues.map(analog => getTableRow(analog))
                                ]
                                : getTableRow(item, true)
                        )}
                    </tbody>
                </Table>

                {items.length === 0 && <div style={style.emtyBlock}>Нет данных</div>}
            </div>)
    }
}



