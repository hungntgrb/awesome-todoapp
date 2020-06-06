import React, { createContext, useReducer, useEffect } from "react";
import TodoReducer from "../reducers/TodoReducer";

export const TodoContext = createContext();

export default function TodoContextProvider(props) {
  const [todos, todoDispatch] = useReducer(TodoReducer, [], () => {
    let localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <TodoContext.Provider value={{ todos, todoDispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
