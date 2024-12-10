import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoList() {

    const {todos, deleteTodo, setTodos} = useContext(TodoContext)

    const handleEdit = (id) => {        
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, count: todo.count++, isEditable : !todo.isEditable} :todo
            )
        )
    }

    const handleChange = (text ,id) => {        
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, todoText : text} :todo
            )
        )
    }

    const handleEnter = (e, id) => {
        if(e.key === "Enter") {
            handleEdit(id)
        }
    }

    const handleTask = (id) => {
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id? {...todo, isDone : !todo.isDone} :todo
            )
        )
    }

    return (
        <div className="lists">
            {
                todos.map((todo)=> {
                    return <div key={todo.id} className="task">
                        <input type="text" className="text" value={todo.todoText} readOnly={!todo.isEditable} onChange={(e)=>{handleChange(e.value, todo.id)}} onKeyDown={(e)=>handleEnter( e,todo.id)}></input>
                        <div className="keys">
                            <input type="checkbox" className="checkbox" checked= {todo.isDone} onChange={()=>handleTask(todo.id)}/>
                            <div className="buttons">
                                <button className="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                <button className="edit" onClick={()=>handleEdit(todo.id)}>{todo.isEditable ? "Done": "Edit"}</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default TodoList