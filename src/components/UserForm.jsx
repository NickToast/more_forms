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

    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstError("First Name is required.")
        } else if(e.target.value.length < 2){
            setFirstError("First Name must be at least 2 characters.")
        } else {
            setFirstError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastError("Last Name is required.")
        } else if(e.target.value.length < 2){
            setLastError("Last Name must be at least 2 characters.")
        } else {
            setLastError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required.")
        } else if(e.target.value.length < 2){
            setEmailError("Email must be at least 2 characters.")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required.")
        } else if(e.target.value.length < 6){
            setPasswordError("Password must be at least 6 characters.")
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password is required.")
        } else if({confirmPassword} != {password}){
            setConfirmPasswordError("Passwords must match.")
        } else {
            setConfirmPasswordError("");
        }
    }



    return(
        <form onSubmit="createUser">
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={handleFirstName}/>
                {
                    firstError ?
                    <p>{firstError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={handleLastName}/>
                {
                    lastError ?
                    <p>{lastError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={handleEmail}/>
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlePassword}/>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
                {
                    confirmPasswordError ?
                    <p>{confirmPasswordError}</p>:
                    ""
                }
            </div>
        </form>
    )
}

export default UserForm;