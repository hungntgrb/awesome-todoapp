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
    <form
      className="d-flex flex-column flex-sm-row justify-content-between mb-3"
      onSubmit={handleSubmit}
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Task</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
        />
      </div>
      <input
        className="btn green-button ml-sm-1 mt-3 mt-sm-0 font-weight-bold"
        type="submit"
        value="ADD"
      />
    </form>
  );
}
