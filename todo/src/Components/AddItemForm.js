import React, { Component } from 'react';


export default class AddItemForm extends Component  {
    state = {
        value: ''
    };
    handleChange = (e) => {
        const label = e.target.value;
        this.setState({
            value: label
        })
    };
    addItem = () => {
        const enteredValue = this.state.value;
        if (this.isEmptyValue(enteredValue))
            return;
        this.props.onAdded(enteredValue);
    };
    inputSaveHandler = (e) => {
        if (e.key === 'Enter') {
            this.addItem();
            this.clearInput();
        }
    };
    buttonSaveHandler = () => {
        this.addItem();
        this.clearInput();
    };
    isEmptyValue = (value) => {
        return value === '';
    };
    clearInput = () => {
        this.setState({
            value: ''
        });
    }

    render () {
        return (
            <div>
                <input name="label" value={this.state.value} onKeyPress={ this.inputSaveHandler} onChange={this.handleChange} />
                <button onClick = { this.buttonSaveHandler } >Add item</button>
            </div>
        )
    }
    
}