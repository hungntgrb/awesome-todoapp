import React from "react";
import TodoContextProvider from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="display-3 text-center mb-4">Todo List</h1>
        <TodoContextProvider>
          <TodoForm />
          <TodoList />
        </TodoContextProvider>
      </div>

      <footer>
        Written with React <br /> <strong>Nguyễn Thanh Hùng</strong> &copy; 2020
      </footer>
    </>
  );
}

export default App;
