import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
    const { todos } = useSelector((state) => state.todo);

    return (
        <div>
            <TodoForm />
            {todos.map((todo, index) => (
                <Todo key={todo.id} id={todo.id} task={todo.task} />
            ))}
        </div>
    );
};

export default App;
