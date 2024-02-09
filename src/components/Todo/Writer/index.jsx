import React, { useCallback, useState } from "react";

const Writer = ({ onTodoAdd }) => {
  const [data, setData] = useState({ todo: "" });

  const handleAddTodo = useCallback(() => {
    onTodoAdd(data.todo);
    setData({ todo: "" });
  }, [data.todo]);

  const handleChange = useCallback((e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <input
        value={data.todo}
        name="todo"
        onChange={handleChange}
        type="text"
        className="p-1 outline-none border-2 border-gray-300 rounded-md"
      />
      <button
        onClick={handleAddTodo}
        className="bg-indigo-400 px-2 py-1 rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default Writer;
