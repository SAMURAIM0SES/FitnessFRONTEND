import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getActivities } from "../api";

const AllActivities = ({ activities }) => {
  console.log(activities, " look at line 5")
  return (
    <>
      <h1>Activities</h1>

      {activities && activities.length > 0
        ? activities.map((activity) => {
          console.log(activity, " look at line 13")
            return (
              <div key={`activity holder${activity.id}`} className="Activities">
                <h2>{activity.name}</h2>
                <p>{activity.description}</p>
              </div>
            );
          })
        : null}
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

export default AllActivities;
