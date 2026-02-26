import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const title = props.title;
  const setTitle = props.setTitle;

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-800 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full px-4 py-3 bg-black text-white border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />

      <button
        className="mt-4 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300"
      >
        Create Todo
      </button>
    </form>
  );
};

export default Create;