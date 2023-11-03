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

    return (
        <div>
            <input
                value={value}
                placeholder="enter task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
