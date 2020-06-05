import React, { createContext, useReducer } from "react";
import EditingReducer from "../reducers/EditingReducer";

export const EditingContext = createContext();

export default function EditingContextProvider(props) {
  const [editingState, editingDispatch] = useReducer(EditingReducer, {
    activeText: "",
    isEditing: false,
  });

  return (
    <EditingContext.Provider value={{ editingState, editingDispatch }}>
      {props.children}
    </EditingContext.Provider>
  );
}
