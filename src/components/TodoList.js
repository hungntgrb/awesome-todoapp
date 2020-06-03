import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  const handleClick = (todo) => {
    dispatch({ type: "DELETE", id: todo.id });
  };

  return todos ? (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => handleClick(todo)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>There is no Todo left!</p>
  );
}
