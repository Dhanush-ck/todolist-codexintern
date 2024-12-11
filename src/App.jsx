import React from "react";
import TodoContextProvider from "./contexts/TodoContextProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  return (
    <TodoContextProvider>
      <div className="container">
        <div className="container-elements">
          <div className="header">
            <h2>To Do List</h2>
          </div>
          <div className="list-holder">
            <TodoList />
          </div>
          <TodoInput />
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App