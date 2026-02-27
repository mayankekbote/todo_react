import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { todoContext } from "../Wrapper";
import { useContext } from "react";
import { toast } from "react-toastify";
const Create = () => {

  const [todos,setTodos]= useContext(todoContext)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const newTodo = {
      id: nanoid(),
      title: data.title,
    };
    setTodos([...todos, newTodo]);
    toast.success("Todo Created")
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-800 w-full max-w-md"
    >
      <input
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
        })}
        type="text"
        placeholder="Enter Title"
        className="w-full px-4 py-3 bg-black text-white border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />

      {errors.title ? (
        <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
      ) : null}

      <button className="mt-4 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300">
        Create Todo
      </button>
    </form>
  );
};

export default Create;
