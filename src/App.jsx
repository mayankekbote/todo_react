import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="min-h-screen  bg-zinc-900 text-white flex flex-col">
      
      {/* Header */}
      <div className="px-10 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-orange-500">Todo</span> Dashboard
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 px-10  gap-10">

        {/* Left Side */}
        <div className="w-3/5 flex justify-center h-[40%] py-5">
          <Create/>
        </div>

        {/* Right Side*/}
        <div className="mb-10 h-screen w-2/5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 overflow-y-auto">
          <Read/>
        </div>

      </div>
    </div>
  );
};

export default App;