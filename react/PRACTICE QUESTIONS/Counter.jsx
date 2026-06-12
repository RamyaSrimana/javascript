import { useState } from "react";

function Counter(){

    const[count , setCount] = useState(0);
      
    function decrease(){
        if(count > 0){
            setCount(count - 1);
        }
    }

    return(<>
    <button onClick = {() => setCount(count + 1)}>Increase</button>
    <button onClick = {decrease}>Decrease</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <h1>Count: {count}</h1>
    </>)
}
export default Counter;