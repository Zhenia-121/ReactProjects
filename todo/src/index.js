import React from 'react';
import ReactDOM from 'react-dom';
import ToDoListHeader from './Components/todo-list-header';
import SearchTask from './Components/searchtask';
import ToDoList from './Components/todo-list';

const App = () => {
    return (
        <div>
        <ToDoListHeader />
        <SearchTask />
        <ToDoList />
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root')); 


