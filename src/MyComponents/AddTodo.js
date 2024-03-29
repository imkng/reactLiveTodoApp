import React,{useState} from 'react'

export default function AddTodo(props) {
    const[title,setTitle] = useState("")
    const[desc,setDesc] = useState("")


    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title And Description are Blank")
        }
        else{props.addTodo(title,desc);
        setTitle("")
        setDesc("")
        }
    }
    return (
        <div className = "container my-3">
            <form onSubmit = {submit}>
            <div className="mb-3">
                <label htmlFor ="title" className="form-label">Todo Title</label>
                <input type="text" value = {title}  onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder = "TOdo?" />
            </div>
            <div className="mb-3">
                <label htmlFor ="desc" className="form-label">Todo Description</label>
                <input type="text" value = {desc} onChange = {(e)=>{setDesc(e.target.value)}}  className="form-control" id="text" placeholder = "Description?"/>
            </div>
            
            <button type="submit" className="btn  btn-sm btn-success">Add Todo</button>
            </form>
            
        </div>
    )
}
