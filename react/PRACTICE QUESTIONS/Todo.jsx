import { useState } from "react"

function Todo(){

    const[items,setItems] = useState([]);
    const[item,setItem] = useState("")

    function AddTask(){
        setItems([...items,item]);
        setItem("");
    }

    function DeleteTask(indexToDelete){
        setItems(items.filter((_,index) => index !== indexToDelete
    ));
    }

    return(
        <>
        <input type = "text" value = {item}
         placeholder = "Enter the Task" onChange = {(e) => setItem(e.target.value)}/>
         <button onClick = {AddTask}>Add Task</button>
         <ul>{items.map((item,index) => (
            <li key={index} >{item}<button onClick = {() => DeleteTask(index)}>Delete Task</button></li>
         ))}</ul>
        </>
    )
}
export default Todo;