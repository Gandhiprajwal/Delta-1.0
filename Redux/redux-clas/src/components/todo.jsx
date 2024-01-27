import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../feature/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  //   console.log(todos);
  const dispatch = useDispatch();
  return (
    <>
      <AddForm />
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
