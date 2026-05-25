import { useState } from "react";
const[items,setItems] = useState([1,2,3,4,5]);
const[item1,setItem1] = useState(0)

function addItem(){
       setItems([...items,item1]);
       setItem1('');
}


function ListKeys() {
   return (<>
   <input type="text" value = {item1} onChange = {(e) => setItem1(e.target.value)}/>
   <button onClick={addItem}>Add item</button>
   <ul>
    {items.map((item,index) =>  <li key = {index}> {item} </li>)}
   </ul>
  </>)
}

export default ListKeys; 
// <button onClick = {() => setCount(count + 1)}>Increment</button>
// controlled component => value its merge
// usestate => re render aagum
//key is usd to track the elements in UL
//

