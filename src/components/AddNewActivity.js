import React, { useEffect } from "react"
import {createNewActivity} from "../api";





const AddNewActivity = ({name,setName, description, setDescription}) => {
const token = localStorage.getItem("token")
const handleOnChange = (event) => {
   
    const changed = event.target;
    if(changed === "name") {
        setName(event.target.value)
        
    }
    else if(changed === "description") {
        setDescription(event.target.value)
        
    }
  
   
}

async function handleSubmit(event){
    event.preventDefault()
    const result = await createNewActivity(name,description, token)
    localStorage.setItem("token", result.data)
}


    return (
    <>
        <div>Create New Activity</div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input id="Name" placeholder="Name..." onChange={handleOnChange} />
            <label>Description:</label>
            <input id="Description" placeholder="Description..." onChange={handleOnChange} />
            <button type="submit" className="btn">Add Activity</button>
        </form>
        </>
    )

}

export default AddNewActivity;