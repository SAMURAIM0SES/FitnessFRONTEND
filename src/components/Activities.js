import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getActivity } from "../api";



const allActivities = () => {
  const token = localStorage.getItem("token")
  useEffect(() => {
    getActivity().then((result) => {
      setActivities(result.activities);
    });
  }, []);
  
  // console.log(token);


  return (
    <>
      <h1>Activities</h1>
      {activities.map((activity) => {
        let activityId = activity._id;
        return(
           <div key={activityId} className="Activities">
          <h2>{activity.name}</h2>
          <p>{activity.description}</p>
          
          
          
        </div>
        )
       
        })}
    </>
  );
};




export default allActivities