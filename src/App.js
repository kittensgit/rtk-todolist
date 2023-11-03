import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './components/Todo';

const App = () => {
    const { todos } = useSelector((state) => state.todo);

    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key={index} task={todo.task} />
            ))}
        </div>
    );
};

export default App;
