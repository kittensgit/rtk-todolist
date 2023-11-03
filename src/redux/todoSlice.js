import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
    todos: [],
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
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;
