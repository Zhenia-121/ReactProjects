import React, { Component } from 'react';
import ToDoListHeader from './ToDoListHeader';
import ToDoList from './ToDoList/ToDoList';
import AddItemForm from './AddItemForm';

export default class App extends Component {
    state = {
        items: [
            { id: 0, label: 'Learn English' },
            { id: 1, label: 'Learn Coding' },
            { id: 2, label: 'Do nothing' }
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
                newId = items.reduce((a, b) => (a.id > b.id ? a.id : b.id)) + 1;
            }
            const newItem = { id: newId, label: label };
            return {
                items: [...items, newItem]
            }
        });
    }

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
                <ToDoList items={ items } onDeleted={ this.deleteItem } onCleanAll={ this.cleanAll }/>
                <AddItemForm onAdded={this.addItem} />
            </div>
        );
    };
};
