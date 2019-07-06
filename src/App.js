import React from 'react';
import './App.css';

// Providers
import {TodoProvider} from './components/Todo/TodoContext';

// Components
import AddTodo from './components/Todo/AddTodo';
import TodoList from './components/Todo/TodoList';

function App() {
	return (
		<TodoProvider>
			<div className="App">
				<TodoList />
				<AddTodo />
			</div>
		</TodoProvider>
	);
}

export default App;
