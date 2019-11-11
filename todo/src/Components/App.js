import React, { Component } from 'react';
import ToDoListHeader from './ToDoListHeader';
import ToDoList from './ToDoList/ToDoList';
import AddItemForm from './AddItemForm';

export default class App extends Component {
    state = {
        items: [
            { id: 0, label: 'Learn English', done: false },
            { id: 1, label: 'Learn Coding', done: false },
            { id: 2, label: 'Do nothing', done: false }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
            const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
            return {
                items: newArray
            }
        });
    };

    addItem = (label) => {
        this.setState(({ items }) => {
            let newId = 0;
            if (items.length > 0) {
                newId = items.reduce((max, value) => Math.max(max, value.id), 1) + 1;
            }
            const newItem = { id: newId, label: label, done: false };
            return {
                items: [...items, newItem]
            }
        });
    };

    changeTaskStatus = (id) => {
        this.setState(({ items}) => {
            const idx = items.findIndex((item) => item.id === id);
            const itemWithOldState = items[idx];
            const itemWithNewState = { ...itemWithOldState, done: !itemWithOldState.done };
            const newArray = [...items.slice(0, idx), itemWithNewState, ...items.slice(idx + 1)];
            return {
                items: newArray
            };    
        })
    };
    cleanAll = () => {
        this.setState({
            items: []
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <ToDoListHeader header={"To do:"} />
                <ToDoList items={ items } onDeleted={ this.deleteItem } onLabelClicked={ this.changeTaskStatus } onCleanAll={ this.cleanAll }/>
                <AddItemForm onAdded={this.addItem} />
            </div>
        );
    };
};
