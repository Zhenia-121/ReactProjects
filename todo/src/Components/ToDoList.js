import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ( { items } ) => {
    const toDoList = items.map(item => {
        const { id, ...otherItemsProps } = item;
        return ( 
        <li key={ id }> 
            <ToDoListItem { ... otherItemsProps } /> 
        </li>
        );
    });
    return (
        <ul>
            { toDoList }  
        </ul>
    );
};

export default ToDoList;