import React from "react";
import TodoContext from "./TodoContext";
import { useState } from "react";

function TodoContextProvider({children}) {

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        if(!text) return null

        const todo = {
            todoText : text,
            isDone : false,
            isEditable : false,
            id : Date.now()
        }

        setTodos((prev)=> {return[...prev, todo]})
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id != id))
    }

    return (
        <TodoContext.Provider value={{todos, setTodos, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider