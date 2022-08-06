import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {getRoutines, updateActivity,updateRoutine} from "../api"




const EditRoutine = ({ routineId}) => {
    const [creatorName, setCreatorName] = useState("")
    const [goal, setGoal] = useState("")
 
    const handleOnChange = (event) => {
   
        const changed = event.target.id;
        if(changed === "creatorName") {
            setCreatorName(event.target.value)
        }
        else{
            setGoal(event.target.value)
        }
    }
    async function handleSubmit(event) {
      
        event.preventDefault()
       const token = localStorage.getItem("token")
        const result = await updateRoutine(creatorName, goal, token,  routineId)
        return result
        
     
    }
    
     
      
   
  
    
    return (<div className = "input">
    <form onSubmit = {handleSubmit}>
        <label>
            Creator Name
        </label>
        <input id = "creatorName" 
        onChange = {handleOnChange}
        placeholder = "change creator name"
        value = {creatorName}/>

        <label>
            Goal
        </label>
        <input id = "goal" 
        onChange = {handleOnChange}
        placeholder = "change goal"
        value = {goal}/>
        <button id={routineId} type= "submit"  className = "btn" >edit Routine</button>
    </form>

</div>)
    
    

  };
  
  export default EditRoutine;