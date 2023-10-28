import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { useEffect } from 'react';
import { setTodos } from '../features/todo/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        const todosJson = JSON.parse(localStorage.getItem("todos"));
        if (todosJson) {
            dispatch(setTodos(todosJson));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;