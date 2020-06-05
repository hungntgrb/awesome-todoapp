export default function EditingReducer(state, action) {
  switch (action.type) {
    case "EDIT_ON":
      return { activeText: action.text, isEditing: true };
    case "EDIT_OFF":
      return { activeText: "", isEditing: false };
    case "UPDATE":
      return { ...state, activeText: action.text };
    default:
      return state;
  }
}
