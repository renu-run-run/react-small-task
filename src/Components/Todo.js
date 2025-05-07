import React from "react";
import { useState } from "react";
const Todo =() => {
    const [todoList , setTodoList] = useState([]);
    const [todo, setTodo] = useState("");

    const add = () =>{
        let todoitem = {
            id: Math.floor((Math.random() * 1000 + 1)) ,
            todotask :todo,
        }
        setTodoList((prev) => [...prev, todoitem]);
        setTodo("");
        console.log("clicked")
    }
    
    return(
        <div style={{textAlign:"center"}}>
        <br/><hr/><br/>
           <input type="text" value={todo} placeholder="Enter your task" onChange={(e) => setTodo(e.target.value)} /> 
           <button onClick={add}>Add</button>
           {
            todoList.map((item, idx) =>{
                return(
                    <>
                    <li key = {item.id}> {item.todotask}</li>
                    </>
                )
            })
           }
           <br/> <br/><hr/><br/><br/><br/>
        </div>
    )
}

export default Todo