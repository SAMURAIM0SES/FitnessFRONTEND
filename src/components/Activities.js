import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getActivities } from "../api";



// const allActivities = () => {
//   const token = localStorage.getItem("token")
//   useEffect(() => {
//     getActivities().then((result) => {
//       setActivities(result.activities);
//     });
//   }, []);
  
//   // console.log(token);


//   return (
//     <>
//       <h1>Activities</h1>
//       {activities.map((activity) => {
//         let activityId = activity._id;
//         return(
//            <div key={activityId} className="Activities">
//           <h2>{activity.name}</h2>
//           <p>{activity.description}</p>
          
          
          
//         </div>
//         )
       
//         })}
//     </>
//   );
// };
const [activitiesArray, setActivitiesArray]=useState([])
const [activityName, setActivityName]=useState('')
const [activitiesDes, setActivitiesDes]=useState('')
export async function allActivities (){
try {
  const result= await getActivities()
  setActivitiesArray(result)
} catch (error) {
  console.error(error)
}
useEffect (()=>{
  allActivities()
},[])
return(
    <>
      <h1>Activities</h1>
      {activities.map((activity) => {
        let activityId = activity._id;
       
           <div key={activityId} className="Activities">
          <h2>{activity.name}</h2>
          <p>{activity.description}</p>
          
          
          
        </div> 
})
       
        }
    </> )




export default Activities