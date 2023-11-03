import { createSlice } from '@reduxjs/toolkit';

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
    reducers: {},
});

export const todoReducer = todoSlice.reducer;
