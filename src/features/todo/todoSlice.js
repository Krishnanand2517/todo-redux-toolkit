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
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            const newTodoObject = {
                id: nanoid(),
                text: action.payload
            };

            state.todos.push(newTodoObject);
        },
        removeTodo: (state, action) => {
            const todoId = action.payload;

            state.todos = state.todos.filter((todo) => todo.id !== todoId);
        },
        updateTodo: (state, action) => {
            const todoId = action.payload.id;
            const updatedTodoObject = {
                id: todoId,
                text: action.payload.text
            };

            state.todos = state.todos.map((todo) => (todo.id === todoId) ? updatedTodoObject : todo);
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;