import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';

const Todo = ({ id, task }) => {
    const dispatch = useDispatch();
    return (
        <div>
            {task}
            <button
                onClick={() => {
                    dispatch(deleteTodo(id));
                }}
            >
                delete
            </button>
        </div>
    );
};

export default Todo;
