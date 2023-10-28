import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: "Radhe Radhe"
        }
    ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            };

            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {},
        updateTodo: (state, action) => {}
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;