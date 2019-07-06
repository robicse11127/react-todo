import React, {useState, createContext} from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Learn React Js.',
            completed: false
        },
        {
            id: 2,
            title: 'Eat burger and pizza.',
            completed: false
        },
        {
            id: 3,
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