import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([{ id: 1, title: "Todo1" }]);

  return (
    <div className="min-h-screen  bg-zinc-900 text-white flex flex-col">
      
      {/* Header */}
      <div className="px-10 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-orange-500">Todo</span> Dashboard
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 px-10 py-10 gap-10">

        {/* Left Side - 60% */}
        <div className="w-3/5 flex justify-center h-[40%]">
          <Create
            todos={todos}
            setTodos={setTodos}
            title={title}
            setTitle={setTitle}
          />
        </div>

        {/* Right Side - 40% */}
        <div className="w-2/5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 overflow-y-auto">
          <Read todos={todos} setTodos={setTodos} />
        </div>

      </div>
    </div>
  );
};

export default App;