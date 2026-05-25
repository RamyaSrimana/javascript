import { useEffect, useState } from "react";
function WithDependency(){
    
    const[count,setCount]= useState(0);
    const[name,setName] = useState('');
      

     useEffect(() => {
        console.log("Hello World");//side effect code
    });

    useEffect(() => {
        console.log("Component Rendered");//side effect code
    },[count]);

    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h1>{name}</h1>
        <input onChange={(e) => setName(e.target.value)}/>
        </>
    )

}
export default WithDependency