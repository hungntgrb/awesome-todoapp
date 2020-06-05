import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { EditingContext } from "../contexts/EditingContext";

export default function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const { editingState, editingDispatch } = useContext(EditingContext);

  const handleClick = (todo) => {
    dispatch({ type: "DELETE", id: todo.id });
  };

  const handleEditing = (todo) => {
    editingDispatch({ type: "EDIT_ON", text: todo.text });
  };

  return todos.length ? (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center bg-light"
        >
          <span>{todo.text}</span>
          <button onClick={() => handleEditing(todo)}>Edit</button>
          <svg
            onClick={() => handleClick(todo)}
            class="bi bi-trash-fill red-button"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            />
          </svg>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="list-group">
      <li className="list-group-item list-group-item-info text-center">
        There is no Todo left!
      </li>
    </ul>
  );
}
