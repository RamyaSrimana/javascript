//for react componet we use CAPTIAL letter for jsx
//every jsx file is a functional component 
import {useState} from 'react'

function Counter() {
    const[uname,setUname] = useState(''); 
    const[count,setCount] = useState(0); 
   
    return (
        <>
          {/*  <input type = 'text' onchange = {(e) => setName(e.target.value)} 
          <h1>{name}</h1>  */}
          <h1>{count}</h1>//document.getElementByid('head').textcontent = count
          <button onClick = {() => setCount(count + 1)}>Increment</button>
        </>
    )
}
export default Counter;


// setCount(prev => prev + 1)
// setCount(prev => prev + 1)

    /* Virtual DOM  =>   Actual DOM  => Virtual DOM(copy of actual DOM)
parsing(read)  =>  loading(loaded into browser memory)  => rendering(display) 
what is usestate => usestate is a value that value can be updated
convention , keyword [[,onClick , oninput => every key you type , onchange => only when focus changes]]
e.target.value  => when we need to give function hello (e) 
target => it targets which element calls that
coonditional render
Event Handler =>    */



