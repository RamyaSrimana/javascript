// function Student(props){
//     return (
//         <>
//          <h1>Student Name : {props.name}</h1>
//          <h1>Student Name : {props.age}</h1>
//          <h1>Student Name : {props.gender}</h1>
//         </>
//     )
// }
// export default Student;
function Student({name,gender})
{
    return (
        <>
         <h1>Student Name : {name}</h1>
         <h1>Gender: {gender}</h1>
        </>
    )
}
export default Student;