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
        this.props.onAdded(this.state.value);
        this.cleanInput();
    }
    inputSaveHandler = (e) => {
        if (e.key === 'Enter') {
            this.addItem();
        }
    };
    cleanInput = () => {
        this.setState({
            value: ''
        });
    }

    render () {
        return (
            <div>
                <input name="label" value={this.state.value} onKeyPress={ this.inputSaveHandler} onChange={this.handleChange} />
                <button onClick = {() => { this.addItem() }} >Add item</button>
            </div>
        )
    }
    
}