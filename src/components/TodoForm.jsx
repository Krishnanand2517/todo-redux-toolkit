

const TodoForm = () => {
    return (
        <form className="flex justify-center mt-12">
            <input
                type="text"
                className="w-full bg-gray-600 rounded-l-lg px-4"
                placeholder="write your task here..."
            />
            <button
                className="font-bold rounded-r-lg bg-blue-400 px-6 py-1"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;