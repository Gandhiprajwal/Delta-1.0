import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [tasks, setTasks] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTasks, setNewTodo] = useState("");

  let addNewTaks = () => {
    setTasks((prevTodo) => {
      return [...prevTodo, { task: newTasks, id: uuidv4(), isDone: false }];
    });
  };

  let updateTaskvalue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTasks(() => tasks.filter((prevTodo) => prevTodo.id != id));
  };

  // let upperCaseAll = () => {
  //   tasks.map(() => {
  //     setTasks((prevTasks) =>
  //       prevTasks.map((todo) => {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       })
  //     );
  //   });
  // };
  let markAllasDone = () => {
    tasks.map(() => {
      setTasks((prevTasks) =>
        prevTasks.map((todo) => {
          return {
            ...todo,
            isDone: true,
          };
        })
      );
    });
  };

  // let upperCaseOne = (id) => {
  //   tasks.map(() => {
  //     setTasks((prevTasks) =>
  //       prevTasks.map((todo) => {
  //         if (todo.id === id) {
  //           return {
  //             ...todo,
  //             task: todo.task.toUpperCase(),
  //           };
  //         } else {
  //           return todo;
  //         }
  //       })
  //     );
  //   });
  // };
  let markAsDone = (id) => {
    tasks.map(() => {
      setTasks((prevTasks) =>
        prevTasks.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: true,
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
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}
              </span>
              &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Mark All Done</button> &nbsp;
              &nbsp;
              <button onClick={() => markAsDone(todo.id)}>Mark Done</button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={markAllasDone}>UpperCase All</button>
    </>
  );
}
