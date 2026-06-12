import { useState } from "react";

function SearchFilter(){
    const [names,setNames] = useState(["Ramya","Maha","Mehala","Abe"]);
    const [search,setSearch] = useState("");
    let filter = names.filter((name,index) => (
        name.toLowerCase().includes(search.toLowerCase())
    ));

    return(
        <>
        <input type = "text" placeholder="Search Your Name" 
             onChange = {(e) => setSearch(e.target.value)}/>
        <ul>{filter.map((name,index) => (
            <li>{name}</li>
        ))}</ul>
        </>
    )

}
export default SearchFilter;