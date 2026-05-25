import { useState } from "react";

function TodoApp() {
   const[tasks,setTasks] = useState([]);
   const[task,setTask] = useState('');

 function handleTask(){
  setTasks([...tasks,task]);
  setTask('');
 }

 function handleFilter(i){
        setTasks(tasks.filter((_,index) => index !== i));
 }

  return (
    <div>
      <input type="text"task value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleTask}>ADD</button>


      <ul>
        {tasks.map((item,index) => <li key={index}>{item} 
            <button onClick={() => handleFilter(index)}> X </button> </li>)}
      </ul>
    </div>
  );
}
export default TodoApp;
