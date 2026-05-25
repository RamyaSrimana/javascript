import { useState } from "react";
import Eligible from "./eligible";
import NotEligible from "./NotEligible";

function Rendering(){

     function Condition(){
        const[age,setAge] = useState(18);
     }
    return(
        <>
        {age  >= 18 ? <Eligible/> : <NotEligible/>}
        {age  >= 18 && <h1>Eligible to Vote</h1> } 
        </>
    )
}


