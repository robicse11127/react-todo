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
				<div className="container">
					<TodoList />
					<AddTodo />
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
