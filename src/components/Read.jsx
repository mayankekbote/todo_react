import { useContext } from "react";
import { todoContext } from "../Wrapper";
import { toast } from "react-toastify";

const Read = () => {
  
  const [todos,setTodos]= useContext(todoContext)

  const renderTodos = todos.map((todo) => {
    const deleteHandler = (id) => {
      const filteredTodos = todos.filter((todo) => todo.id != id);
      toast.error("Todo Deleted")
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
    <div className="py-1 w-full max-w-md">
      <h1 className="text-xl font-bold text-center text-white mb-4 tracking-wide">
        Your Todos
      </h1>

      <ol className="space-y-3">{renderTodos}</ol>
    </div>
  );
};

export default Read;