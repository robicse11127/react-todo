import React, {useState, useContext} from 'react';
import {TodoContext} from './TodoContext';
const AddTodo = () => {
    const [ title, setTitle ] = useState('');
    const [ todos, setTodos ] = useContext( TodoContext );
    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = e => {
        e.preventDefault();
        setTodos( [...todos, { id: 4, title: title, completed: false }] );
        setTitle('');
    }
    return(
        <form onSubmit={addTodo} style={formStyle}>
            <input type="text" name="title" placeholder="Add todo..." value={title} onChange={updateTitle}/>
        </form>
    )
}

const formStyle = {
    textAlign: "center"
}

export default AddTodo;