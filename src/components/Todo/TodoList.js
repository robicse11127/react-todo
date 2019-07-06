import React, {useContext} from 'react'
import Todo from './Todo';

// Context
import {TodoContext} from './TodoContext';
const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);
    return (
        <div>
            {todos.map( (todo, index) => (
                <Todo key={index} title={todo.title} id={todo.id} />
            ))}
        </div>
    )
}

export default TodoList;
