import { useEffect, useState } from "react"

function Effect(){
    const[count,setCount] = useState(0);
    useEffect(() => {
            console.log("component Rendered");
    },[count]);

     return 
     (<>
     <h1>{count}</h1>
     <button onClick={() => setCount(count + 1)}>Increment</button>
     </>);
}
export default Effect

//useEffect => Handling the Side Effects.
//Each and every time it will render by using use effect
//before the start of render useeffect will run 
