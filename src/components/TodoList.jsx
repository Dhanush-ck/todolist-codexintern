import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoList() {

    const {todos, deleteTodo, setTodos} = useContext(TodoContext)

    const handleEdit = (id) => {        
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, isEditable : !todo.isEditable} :todo
            )
        )
    };

    const handleChange = (text ,id) => {   
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, todoText : text} :todo
            )
        )
    };

    const handleEnter = (e, id) => {
        if(e.key === "Enter") {
            handleEdit(id)
        }
    };

    const handleTask = (id) => {
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id? {...todo, isDone : !todo.isDone} :todo
            )
        )
    }

    return (
        <div className="holder">
        <div className="lists">
            {
                todos.filter((todo)=>!todo.isDone).map((todo)=> {
                    return <div key={todo.id} className="task">
                        <div className="keys">
                            <input type="text" className="text" value={todo.todoText} readOnly={!todo.isEditable} onChange={(e)=>{handleChange(e.target.value, todo.id)}} onKeyDown={(e)=>handleEnter( e,todo.id)}></input>
                            <input type="checkbox" className="checkbox" checked= {todo.isDone} onChange={()=>handleTask(todo.id)}/>
                        </div>
                        <div className="buttons">
                            <button className="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button className="edit" onClick={()=>handleEdit(todo.id)}>{todo.isEditable ? "Done": "Edit"}</button>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="completed">
            <h2 className="completed-text">Completed</h2>
        </div>
        <div className="done">
            {
                todos.filter((todo)=>todo.isDone).map((todo) => {
                    return <div key={todo.id} className="task">
                        <div className="keys">
                            <input type="text" className="text" value={todo.todoText} readOnly={!todo.isEditable} onChange={(e)=>{handleChange(e.target.value, todo.id)}} onKeyDown={(e)=>handleEnter( e,todo.id)}></input>
                            <input type="checkbox" className="checkbox" checked= {todo.isDone} onChange={()=>handleTask(todo.id)}/>
                        </div>
                        <div className="buttons">
                            <button className="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button className="edit" onClick={()=>handleEdit(todo.id)}>{todo.isEditable ? "Done": "Edit"}</button>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
    )
}

export default TodoList