import { v4 } from "uuid";

export default function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: v4(), text: action.text }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      let temp_todos = state.filter((todo) => todo.id !== action.id);
      return [...temp_todos, { id: action.id, text: action.text }];
    default:
      return state;
  }
}
