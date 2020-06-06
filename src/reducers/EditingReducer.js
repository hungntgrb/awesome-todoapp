export default function EditingReducer(state, action) {
  switch (action.type) {
    case "EDIT_ON":
      return {
        ...state,
        activeText: action.text,
        activeId: action.id,
        completed: action.completed,
        isEditing: true,
      };
    case "EDIT_OFF":
      return { ...state, activeText: "", activeId: "", isEditing: false };
    case "UPDATE":
      return { ...state, activeText: action.text };
    default:
      return state;
  }
}
