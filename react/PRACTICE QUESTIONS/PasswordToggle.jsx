import { useState } from "react"
function PasswordToggle(){
    const[show,setShow] = useState(false)
    return(
        <>
        <input type = {show ? "text" : "password"}/>
        <button onClick = {() => setShow(!show)}>{show ? "Hide Password" : "Show Password"}</button>
        </>
    )
}
export default PasswordToggle