import { v4 } from "uuid";

export default function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: v4(), text: action.text }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
