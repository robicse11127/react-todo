import React, {useState, useContext} from 'react';
import uuidv4 from 'uuid/v4';
import {TodoContext} from './TodoContext';
const AddTodo = () => {
    const [ title, setTitle ] = useState('');
    const [ todos, setTodos ] = useContext( TodoContext );
    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = e => {
        e.preventDefault();
        setTodos( [...todos, { id: uuidv4(), title: title, completed: false }] );
        setTitle('');
    }
    return(
        <footer className="footer">
            <form onSubmit={addTodo} style={formStyle}>
                <input type="text" name="title" className="form-input" placeholder="Add todo..." value={title} onChange={updateTitle}/>
            </form>
        </footer>
    )
}

const formStyle = {
    textAlign: "center"
}

export default AddTodo;