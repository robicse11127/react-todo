import React, {useContext} from 'react'
import Todo from './Todo';

// Context
import {TodoContext} from './TodoContext';
const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);
    return (
        <div>
            <header className="header">
                <h2>React Todo App</h2>
            </header>
            <div className="content">
                {todos.map( (todo, index) => (
                    <Todo key={index} title={todo.title} id={todo.id} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;
