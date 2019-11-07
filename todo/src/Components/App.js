import React from 'react';
import ToDoListHeader from './ToDoListHeader';
import SearchTask from './SearchPanel';
import ToDoList from './ToDoList';

const App = () => {
    const todoList = [
        { id: 1, label: "Learn English", important: true },
        { id: 2, label: "Learn Coding", important: true },
        { id: 3, label: "Do nothing", important: false }
    ]
    return (
        <div>
        <ToDoListHeader />
        <SearchTask />
        <ToDoList items = { todoList } />
    </div>)
}

export default App;