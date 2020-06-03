import React from "react";
import TodoContextProvider from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="display-2 text-center mb-4">Todo List</h1>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
      <div className="foot-wrap">
        <footer>
          Designed by <strong>Nguyen Thanh Hung</strong> &copy; 2020
        </footer>
      </div>
    </div>
  );
}

export default App;
