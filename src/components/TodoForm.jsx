import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(todoText));
    };

    return (
        <form onSubmit={submitHandler} className="flex justify-center mt-12 mb-16">
            <input
                type="text"
                className="w-full bg-gray-600 rounded-l-lg px-4"
                value={todoText}
                placeholder="write your task here..."
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button
                type="submit"
                className="font-bold rounded-r-lg bg-blue-400 px-6 py-1"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;