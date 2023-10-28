import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(todoText));
        setTodoText("");
    };

    return (
        <form onSubmit={submitHandler} className="flex justify-center mt-12 mb-16">
            <input
                type="text"
                className="w-full bg-gray-600 hover:bg-gray-700 rounded-l-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={todoText}
                placeholder="write your task here..."
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button
                type="submit"
                className="bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded-r-lg text-md"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;