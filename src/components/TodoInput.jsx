import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoInput() {

    const [input, setInput] = useState("")
    const {addTodo} = useContext(TodoContext)

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput("")
        addTodo(input)
    }
    
    const handleEnter = (e) => {
        if(e.key === "Enter") {
            setInput("")
            addTodo(input)
        }
    }

    return (
        <div className="input-area">
            <input type="text" className="input-box" onChange={handleInput} value={input} onKeyDown={handleEnter}/>
            <button className="add-button" onClick={handleSubmit}>+</button>
        </div>
    )
}

export default TodoInput