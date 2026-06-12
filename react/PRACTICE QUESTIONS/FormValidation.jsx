import { useState } from "react";

function FormValidation() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const[submitted,setSubmitted] = useState(false);

    function checkForm(e) {
        e.preventDefault();

        if (name === "" || password === "") {
            alert("Fields should not be empty");
            return;
        }
        setSubmitted(true);
        alert("Form Submitted Successfully");
    }

    return (
         <>
        <form onSubmit={checkForm}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter UserName"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <button type="submit">Submit</button>
        </form>
        {submitted && (
            <>
            <p>{name}</p>
            <p>{password}</p>
            </>
        )}
       </>
    );
}

export default FormValidation;