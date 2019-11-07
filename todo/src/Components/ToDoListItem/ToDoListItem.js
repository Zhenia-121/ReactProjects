import React, { Component } from 'react';
import './ToDoListItem.css';

export default class ToDoListItem extends Component {
    
    state = {
        done: true
    }
    
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    render() {
        const { label } =  this.props;
        const { done } = this.state; 

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
    
        return (
            <div>
                <span 
                    className = { classNames }
                    onClick={ this.onLabelClick }> 
                    { label }
                </span>
                <button className={ "delete-item" } onClick={ this.props.onDeleted}> 
                    Delete
                </button> 
            </div>
            
        );
    }
}
