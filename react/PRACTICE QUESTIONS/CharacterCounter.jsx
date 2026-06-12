import { useState } from "react"

function CharacterCounter(){

    const[count,setCount] = useState(0);
    return(
        <>
        <input type="textarea" onChange={() => setCount(count + 1)}/>
        <h1>{count}</h1>
        </>
    )

}
export default CharacterCounter