import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [tasks, setTasks] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTasks, setNewTodo] = useState("");

  let addNewTaks = () => {
    setTasks((prevTodo) => {
      return [...prevTodo, { task: newTasks, id: uuidv4() }];
    });
  };

  let updateTaskvalue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTasks(() => tasks.filter((prevTodo) => prevTodo.id != id));
  };

  let upperCaseAll = () => {
    tasks.map(() => {
      setTasks((prevTasks) =>
        prevTasks.map((todo) => {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        })
      );
    });
  };

  let upperCaseOne = (id) => {
    tasks.map(() => {
      setTasks((prevTasks) =>
        prevTasks.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              task: todo.task.toUpperCase(),
            };
          } else {
            return todo;
          }
        })
      );
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="add a task"
        value={newTasks}
        onChange={updateTaskvalue}
      />
      <br />
      <br />
      <button onClick={addNewTaks}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {tasks.map((todo) => {
          return (
            <li key={todo.id}>
              <span>
                {todo.task} &nbsp; &nbsp;
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>{" "}
                &nbsp; &nbsp;
                <button onClick={() => upperCaseOne(todo.id)}>
                  UpperCase One
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
    </>
  );
}
