import { useState } from "react";

function TailwindHTMLController() {
  // Dynamic Styles
   const green = "bg-green-500 text-white px-3 py-2 rounded m-5";
   const red = "bg-red-500 text-white px-3 py-2 rounded m-5" ; 

   const[mode,setMode] = useState(false);

  function handleMode(){
          setMode(!mode);
  }

  
  return ( 
        <div>
        <button onClick={handleMode} className= {mode ? green : red}>Click</button>
        </div>
  );
}
export default TailwindHTMLController;




// import { useState } from "react"; ()
// function TailwindHTMLController(props) {
//    const green = "bg-green-500 text-white px-3 py-2 rounded m-5";
//    const red = "bg-red-500 text-white px-3 py-2 rounded m-5" ; 

//   return ( 
//         <>
//         <button className= {props.isActive ? green : red}>Click</button>
//         </>
//   );
// }
// export default TailwindHTMLController;



{/* <>  button when we use it cover changes
 <button className="bg-green-300 hover:bg-green-600 hover:text-white px-3 py-2  rounded rounded-xl m-5">Click</button>
</> */}

  //  <>
  //   {/* <div className="md:text-4xl"> */} 
  //   <div className="text-2xl lg:bg-green-500">
  //     <p>This is a Para</p>
  //   </div>   
  //   </>


// {/* <> // its a navigation menu
// //  {/* <nav className="bg-gray-700 text-white p-4 flex justify-between">
// //         <h1>My Logo</h1>
// //         <div className="flex gap-5">
// //             <div>Home</div>
// //             <div>About</div>
// //             <div>Service</div>
// //             <div>Contanc</div>
// //         </div>
// //        </nav> */ </> */}




  // <> // its a simple Grid
    // <div className="grid grid-cols gap-4">
    //     <div className="bg-red-300 text-center"> 1</div>
    //     <div className="bg-pink-400 text-center">2</div>
    //     <div className="bg-green-200 text-center">3</div>
    // </div>
    //   <div className="flex justify-center border border-red-700 items-center ">
    //     <button className="bg-slate-700 text-white  p-2 rounded-xl ">Click Here </button>
    //   </div>
    //   </>




    //     <> //Simple Hello world
    //       <h1 className="text-6xl font-bold bg-green-500 text-white p-4">
    //         Hello World
    //       </h1>
    // <button className="bg-slate-700 text-white  p-2 rounded-xl w-full h-screen">
    //     Click here
    // </button></>