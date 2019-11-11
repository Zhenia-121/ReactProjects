import React, { Component } from 'react';
import './ToDoListItem.css';

export default class ToDoListItem extends Component {
    
    render() {
        const { label, done } =  this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
    
        return (
            <div>
                <span 
                    className = { classNames }
                    onClick={ this.props.onLabelClick }> 
                    { label }
                </span>
                <button className={ "delete-item" } onClick={ this.props.onDeleted }> 
                    Delete
                </button> 
            </div>
            
        );
    }
}
