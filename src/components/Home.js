import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import{Login,Register,NavBar,AllActivities,Routines,MyRoutines} from './'
import { getActivities } from "../api";




const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token,setToken] = useState("");
    const [activities, setActivities] = useState([])

async function fetchAllActivities(){
  try {
  const result= await getActivities()
  setActivities(result)
} catch (error) {
  console.error(error)
}

}

useEffect (()=>{
  fetchAllActivities()
},[])

console.log(activities, "look at these acts!")

return (
    <>
    <NavBar />
    <Routes>
        <Route exact path='/' element={<div className="welcome">Welcome to Fitness Tracker!</div>}></Route>
        
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
         exact path="/register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>
        <Route 
        exact path ="/activities"
        element= {
          <AllActivities
          activities = {activities}
          setActivities = {setActivities}
          
          



          />
        }></Route>
        
    </Routes>
    </>
)
}

export default Home