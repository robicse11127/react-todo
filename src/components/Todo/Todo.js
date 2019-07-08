import React, {useContext} from 'react';
import {TodoContext} from './TodoContext';
import deletelogo from './../../img/delete.png';
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

    const itemStyle = (completed) => {
        if(props.completed === true) {
            return {
                textDecoration: 'line-through'
            }
        }
    }

    return (
        <div className="todo-item">
            <label>
                <input type="checkbox" name="check_todo" onChange={todoComplete} />
                <span className="item-title" style={itemStyle(props.completed)}>{props.title}</span>
            </label>
            <span className="delete-todo" onClick={todoDelete}>
                <img src={deletelogo} alt="Delete" />
            </span>
        </div>
    )
}

const titleStyle = {
    textDecoration: 'line-through'
}

export default Todo;