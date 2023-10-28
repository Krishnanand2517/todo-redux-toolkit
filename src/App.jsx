import { TodoForm, TodoList } from './components';

const App = () => {

  return (
    <div className="py-4 min-h-screen bg-slate-800 text-white">
      <div className="w-full max-w-2xl mx-auto">
        <TodoForm />
        <h2 className="text-2xl text-center font-black">Tasks</h2>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
