import React, { useState } from "react";
import Writer from "./Writer";
import List from "./List";

const Todo = () => {
  const [items, setItems] = useState([]);
  return (
    <div className="w-[100vw] sm:w-[50vw] border-2 border-gray-500 border-solid rounded-md p-5">
      <Writer
        onTodoAdd={(value) => {
          setItems([...items, { id: 1, name: value }]);
        }}
      />
      <List items={items} />
    </div>
  );
};

export default Todo;
