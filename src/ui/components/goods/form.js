import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

const style = {
    form: {
        border: "solid 5px gray",
        borderRadius: "10px",
        padding: "20px"
    }
}

export default class MainPage extends Component {

    state = {
        number: "",
        brand: "",
        showAnalogues: false
    }

    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }

    handleChangeBrand(event) {
        this.setState({ brand: event.target.value });
    }


    handleCheckAnalogues(event) {
        this.setState({ showAnalogues: event.target.checked });
    }

    onSearchClickHandler = () => {
        const { number, brand, showAnalogues } = this.state;

        if (number.length > 0) {
            this.props.onClick({ number, brand, showAnalogues });
        }
    }

    render() {
        return <Form style={style.form}>
            <Form.Group >
                <Form.Label>Введите номер детали</Form.Label>
                <Form.Control isInvalid={this.state.number.length === 0} type="number" placeholder="Введите номер детали" min="0" onChange={(e) => this.handleChangeNumber(e)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Введите название бренда</Form.Label>
                <Form.Control type="text" placeholder="Введите название бренда" onChange={(e) => this.handleChangeBrand(e)} />
            </Form.Group>

            <Form.Group>
                <Form.Check size="lg" inline label="Отображать аналоги" type="checkbox" onChange={(e) => this.handleCheckAnalogues(e)} />
            </Form.Group>

            <Button variant="primary" onClick={this.onSearchClickHandler}>
                Искать
            </Button>
        </Form >
    }
}