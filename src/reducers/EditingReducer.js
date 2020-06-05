export default function EditingReducer(state, action) {
  switch (action.type) {
    case "EDIT_ON":
      return { activeText: action.text, activeId: action.id, isEditing: true };
    case "EDIT_OFF":
      return { activeText: "", activeId: "", isEditing: false };
    case "UPDATE":
      return { ...state, activeText: action.text };
    default:
      return state;
  }
}
