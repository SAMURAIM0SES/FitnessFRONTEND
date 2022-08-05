import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {getActivities, updateActivity} from "../api"




const EditActivity = ({ activityId}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
 
    const handleOnChange = (event) => {
   
        const changed = event.target.id;
        if(changed === "name") {
            setName(event.target.value)
        }
        else{
            setDescription(event.target.value)
        }
    }
    async function handleSubmit(event) {
      
        event.preventDefault()
       const token = localStorage.getItem("token")
        const result = await updateActivity(name, description, token,  activityId)
        console.log(result, "im a result from edit")
        
     
    };
    
     
      
   
  
    
    return (<div className = "input">
    <form onSubmit = {handleSubmit}>
        <label>
            Name
        </label>
        <input id = "name" 
        onChange = {handleOnChange}
        placeholder = "change name"
        value = {name}/>

        <label>
            Description
        </label>
        <input id = "description" 
        onChange = {handleOnChange}
        placeholder = "change description"
        value = {description}/>
        <button id={activityId} type= "submit"  className = "btn" >edit activity</button>
    </form>

</div>)
    
    
    
    
    // return (
    //   <div>
    //    <form>
    //     name
    //     desc.....
    //    </form>
    //     <button id= {activityId} />
    //   </div>
    // );
  };
  
  export default EditActivity;
  








