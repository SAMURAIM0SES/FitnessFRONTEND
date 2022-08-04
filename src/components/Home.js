import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import{Login,Register,NavBar,AllActivities,AddNewActivity,PublicRoutines,Routines,MyRoutines} from './'
import { getActivities,getPublicRoutines} from "../api";





const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token,setToken] = useState("");
    const [activities, setActivities] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [goal, setGoal] = useState("")
    const [routines, setRoutines] = useState([])
    

    async function fetchPublicRoutines(){
      try {
      const result= await getPublicRoutines()
      setRoutines(result)
    } catch (error) {
      console.error(error)
    }
    
    }
    
    useEffect (()=>{
      fetchPublicRoutines()
    },[])




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

<Route 
        exact path ="/activities"
        element= {
        
          <AddNewActivity
          
          name = {name}
          description = {description}
          setName = {setName}
          setDescription = {setDescription}
          />
        }></Route>
        
        <Route 
        exact path ="/routines"
        element= {
        
          <PublicRoutines
          routines = {routines}
          setRoutines = {setRoutines}
        />
        }></Route>
    </Routes>
    </>
)
}

export default Home