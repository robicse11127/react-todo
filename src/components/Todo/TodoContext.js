import React, {useState, createContext} from 'react';
import uuidv4 from 'uuid/v4';
export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Learn React Js.',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Eat burger and pizza.',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Sleep after watching the cricket match.',
            completed: false
        }
    ]);

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
}