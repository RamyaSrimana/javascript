import { useState  } from "react";
function SearchNoDataFound() {

    const [names, setNames] = useState(["Ramya", "Maha", "Mehala", "Abe"]);
    const [search, setSearch] = useState("");

    const filter = names.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <label>Search Name</label>

            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filter.length > 0 ? (
                    filter.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))
                ) : (
                    <p>Name is Not Here</p>
                )}
            </ul>
        </>
    );
}

export default SearchNoDataFound;