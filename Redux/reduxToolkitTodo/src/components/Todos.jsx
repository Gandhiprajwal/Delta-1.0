import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  //   console.log(todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="">Todos</h1>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-gray-800 p-4 my-2 rounded"
        >
          <p className="text-gray-200">{todo.text}</p>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-600 px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
