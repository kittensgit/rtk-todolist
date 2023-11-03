import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
    const { todos } = useSelector((state) => state.todo);

    return (
        <div>
            <TodoForm />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    complete={todo.complete}
                />
            ))}
        </div>
    );
};

export default App;
