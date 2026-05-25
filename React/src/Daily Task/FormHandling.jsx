import { useState } from "react";
import Welcome from "./Welcome";

function FormHandling() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    if (isValid) {
        return <Welcome name={name} />;
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Validate inputs
        if (name.trim() !== "" && password.trim() !== ""){
            setIsValid(true);
        } else {
            setIsValid(false);
            alert("Please fill all fields");
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>UserName</label>
            <input
                type="text"
                value={name}
                placeholder="Enter UserName"
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <label>Password</label>
            <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <input type="submit" value="Submit" />
        </form>
    );
}

export default FormHandling;