import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { EditingContext } from "../contexts/EditingContext";

export default function TodoForm() {
  const { todoDispatch } = useContext(TodoContext);
  const { editingState, editingDispatch } = useContext(EditingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    editingState.isEditing
      ? todoDispatch({
          type: "UPDATE",
          id: editingState.activeId,
          text: editingState.activeText,
          completed: editingState.completed,
        })
      : todoDispatch({ type: "ADD", text: editingState.activeText });

    editingDispatch({ type: "EDIT_OFF" });
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
          value={editingState.activeText}
          onChange={(e) =>
            editingDispatch({ type: "UPDATE", text: e.target.value })
          }
          className="form-control"
        />
      </div>
      <input
        className={"btn ml-sm-2 mt-3 mt-sm-0 font-weight-bold ".concat(
          editingState.isEditing ? "edit-button" : "green-button"
        )}
        type="submit"
        value={editingState.isEditing ? "SAVE" : "ADD"}
      />
    </form>
  );
}
