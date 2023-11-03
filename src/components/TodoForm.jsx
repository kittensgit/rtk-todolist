import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(value));
        setValue('');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div>
            <input
                value={value}
                placeholder="enter task"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnter}
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
