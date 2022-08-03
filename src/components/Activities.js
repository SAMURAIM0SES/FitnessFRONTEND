import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getActivities } from "../api";



const AllActivities = () => {
 try{
    const {activities, setActivities} = useState([])
    const token = localStorage.getItem("token")
    const result = getActivities()
        setActivities(result);
    
  }catch(error){
    console.log(error, "woooooah something broke on line 15")
  }
  
  useEffect(() => {
    getActivities()
}, [])
  
  // console.log(token);


  return (
    <>
      <h1>Activities</h1>
      
        
        
           <div key={activity.id} className="Activities">
          <h2>{result.activity.name}</h2>
          <p>{activity.description}</p>
          
          
          
        </div>
        
    
        
    </>
  );
};







// function AllActivities (){
//   const [activities, activitiesArray, setActivitiesArray]=useState([])
//   try {
//   const result= getActivities()
//   setActivitiesArray(result)
// } catch (error) {
//   console.error(error)
// }
// useEffect (()=>{
//   AllActivities()
// },[])
// return (
    
//   <div className="activities">

//   (<>
//     {activities.map((activities) => {
//       return (
//         <div
//           className="activities"
//           key={activities._id}
//           style={{
//             alignItems: "center",
//             margin: "20px 60px",
//             border: "1px solid black",
//             padding: "10px",}}>
//           <h3>{activities.name}</h3>
//           <h4>{activities.id}</h4>
//           <p>{activities.description}</p>
          
//         </div>
//       );
//     )
//     </>
    
//   </div>
// );
// };




export default AllActivities