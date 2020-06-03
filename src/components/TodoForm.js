import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", text: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
