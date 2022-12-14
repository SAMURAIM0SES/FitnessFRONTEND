import React from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";


const Login = ({username, setUsername, password, setPassword, token, setToken}) => {
const navigate = useNavigate();

const handleOnChange = (event) => {
   
    const changed = event.target.id;
    if(changed == "username") {
        setUsername(event.target.value)
    }
    else{
        setPassword(event.target.value)
    }
}
async function handleSubmit(event) {
  
    event.preventDefault()
    const result = await loginUser(username,password)
    localStorage.setItem("token",result.token);
    

 navigate("/")


}



return (<div className = "input">
    <form onSubmit = {handleSubmit}>
        <label>
            Username
        </label>
        <input id = "username" 
        onChange = {handleOnChange}
        placeholder = "username"
        value = {username}/>

        <label>
            Password
        </label>
        <input id = "password" 
        onChange = {handleOnChange}
        placeholder = "password"
        value = {password}/>
        <button type= "submit"  className = "btn" >Log in</button>
    </form>

</div>)
}



export default Login