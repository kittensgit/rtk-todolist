import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
    todos: [
        {
            id: '',
            task: '',
            complete: '',
        },
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: v4(),
                task: action.payload,
                complete: false,
            };
            state.todos.push(newTodo);
        },
    },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo } = todoSlice.actions;
