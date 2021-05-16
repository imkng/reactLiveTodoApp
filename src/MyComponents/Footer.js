import React from 'react'

export default function Footer() {
    const footerStyle = {
        
        width : "100%",
        border : "2px solid red"
    }
    return (
        <footer className = "bg-dark text-light" style = {footerStyle}>
        <p className = "text-center">
        Copyright &copy; My TodoList.com
        </p>
            
        </footer>
    )
}
