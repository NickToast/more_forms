import React, {useState} from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [userData, setUserData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // })



    const createUser = (e) => {
        e.preventDefault();

        const UserData = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        setFirstName = "";
        setLastName = "";
        setEmail = "";
        setPassword = "";
        setConfirmPassword = "";
    }

    return(
        <form onSubmit="createUser">
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => {setFirstName(e.target.value)}}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    )
}

export default UserForm;