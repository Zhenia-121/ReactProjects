import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {
    return (
        <ul>
            <li> <ToDoListItem label = { "Learn English" } important = { true } /> </li>
            <li> <ToDoListItem label = { "Learn Coding" } important = { false } /> </li>   
        </ul>
    );
};

export default ToDoList;