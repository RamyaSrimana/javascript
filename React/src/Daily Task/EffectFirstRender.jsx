// jsonplaceholder.typicode.com/users => API (middle Man) => promise(are used in promises(resolve , reject))
//callback hell overcome => then & catch or Async and await 
//then and catch => Async and Await  


import { useEffect } from "react";

function EffectFirstRender(){
    useEffect(() => {
         const intervalid = setInterval(() => {
            console.log("Component Rendered");
         },1000);

         return () => {
            clearInterval(intervalid);
         }
    },[]);

    return <h1>Effect Running Once</h1>


}
export default EffectFirstRender;