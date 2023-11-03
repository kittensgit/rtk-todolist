import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/todoSlice';

const Todo = ({ id, task, complete }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <span
                onClick={() => {
                    dispatch(toggleTodo(id));
                }}
                className={complete ? 'complete' : ''}
            >
                {task}
            </span>
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
