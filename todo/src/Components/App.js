import React, { Component } from 'react';
import ToDoListHeader from './ToDoListHeader';
import ToDoList from './ToDoList';
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
            this.setState(( {items} ) => {
                const idx = items.findIndex((el) => el.id === id);
                const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
                return { 
                    items: newArray
                }
            });
            console.log( ...this.state.items);
            console.log(`${id} element is deleted`);
        };

    addItem = (label) => {
        this.setState(({items}) => {
            let newId = items.reduce((a, b) => (a.id > b.id ? a.id : b.id)) + 1;
            console.log(`new item Id ${newId}`);
            const newItem = { id: newId, label: label};
            return {
                items: [...items, newItem]
            }
        });
        console.log( ...this.state.items);
    }    

        render() {
            const { items } =  this.state;
            return (
                <div>
                    <ToDoListHeader header={"To do:"} />
                    <ToDoList items={ items } onDeleted={ this.deleteItem } />
                    <AddItemForm onAdded={ this.addItem }/>
                </div>
            );
        };
};
