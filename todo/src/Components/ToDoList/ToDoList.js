import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import './ToDoList.css';

const ToDoList = ({ items, onDeleted, onCleanAll }) => {
    const elements = items.map((item) => {
        const { id, ...otherProps } = item;
        return (

            <li key={id}>
                <ToDoListItem {...otherProps} onDeleted={() => onDeleted(id)} />
            </li>
        )
    });
    return (
        <React.Fragment>
            <button className="clean-all" onClick={() => onCleanAll()}>Clean list</button>
            <ul> {elements} </ul>
        </React.Fragment>
    );
};

export default ToDoList;
