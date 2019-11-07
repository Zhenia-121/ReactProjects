import React from 'react';
import ToDoListItem from './ToDoListItem/ToDoListItem';

const ToDoList = ({ items, onDeleted }) => {
        const elements = items.map((item) => {
            const { id, ...otherProps } = item;
            return (
                <li key={ id }> 
                    <ToDoListItem { ...otherProps } onDeleted={ () => onDeleted(id) }/> 
                </li>
                )
        });
        return (<ul> { elements } </ul>);
};

export default ToDoList;
