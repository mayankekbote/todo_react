
const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const renderTodos = todos.map((todo) => {
    const deleteHandler = (id) => {
      const filteredTodos = todos.filter((todo) => todo.id != id);
      setTodos(filteredTodos);
    };

    return (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-zinc-900 px-4 py-3 rounded-xl border border-zinc-800 hover:border-orange-500 transition"
      >
        <span className="text-white">{todo.title}</span>

        <span
          onClick={() => deleteHandler(todo.id)}
          className="text-orange-500 cursor-pointer font-medium hover:text-orange-400 transition"
        >
          DELETE
        </span>
      </li>
    );
  });

  return (
    <div className="mt-4 w-full max-w-md">
      <h1 className="text-xl font-bold text-center text-white mb-4 tracking-wide">
        Your Todos
      </h1>

      <ol className="space-y-3">{renderTodos}</ol>
    </div>
  );
};

export default Read;