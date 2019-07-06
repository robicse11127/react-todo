import React, {useContext} from 'react';
import {TodoContext} from './TodoContext';

const Todo = (props) => {
    const [ todos, setTodos ] = useContext( TodoContext );

    const todoComplete = () => {
        setTodos(todos.map(todo => {
            if( todo.id === props.id ) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    const todoDelete = () => {
        setTodos(todos.filter((todo) => {
            return todo.id !== props.id;
        }))
    }

    return (
        <div>
            <label>
                <input type="checkbox" name="check_todo" onChange={todoComplete} />
                {props.title}
            </label>
            <span className="delete-todo" onClick={todoDelete}>Delete</span>
        </div>
    )
}

export default Todo;