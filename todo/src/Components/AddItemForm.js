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
    saveItem = () => {
        this.props.onAdded(this.state.value);
        this.cleanInput();

    }
    cleanInput = () => {
        this.setState({
            value: ''
        });
    }

    render () {
        return (
            <div>
                <input name="label" value={this.state.value} onChange={this.handleChange} />
                <button onClick = {() => { this.saveItem() }} >Add item</button>
            </div>
        )
    }
    
}