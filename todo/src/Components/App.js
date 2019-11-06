import React from 'react';
import ToDoListHeader from './todo-list-header';
import SearchTask from './searchtask';
import ToDoList from './todo-list';

const App = () => {
    return (
        <div>
        <ToDoListHeader />
        <SearchTask />
        <ToDoList />
    </div>)
}

export default App;