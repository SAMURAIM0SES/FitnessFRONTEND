import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import{Login,Register} from './'



const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token,setToken] = useState("");


return (
    <>
    <Routes>
        <Route path='/' element={<div className="welcome">Welcome to Fitness Tracker!</div>}></Route>
        
        <Route exact
          path="/Login"
          element={
            <Login
            token ={token}
            setToken={setToken}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>
        
        <Route
          path="/Register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>
        
    </Routes>
    </>
)
}

export default Home