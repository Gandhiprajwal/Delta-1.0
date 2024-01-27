import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <br />
        <button>Add Task</button>
      </form>
    </>
  );
}
