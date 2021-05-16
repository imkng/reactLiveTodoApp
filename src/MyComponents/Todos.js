import React from 'react'
import TodoItem from "./TodoItem"
// import './todo.css'

export default function Todos(props) {
    const myStyle = {
        minHeight : "70vh",
        margin : "50px auto"

    }
    return (
        <div className = "container my-3" style = {myStyle}>
            <h3 className = " my-3" >Todo List</h3>
            {props.todos.length === 0 ? "No Todo to Display":
                props.todos.map((todo)=>{
                    return(  
                    <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>)
                })
            }
            
            
            
        </div>
    )
}
