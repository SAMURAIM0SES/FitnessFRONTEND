import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createNewActivity, updateActivity} from "../api";
import AddNewActivity from "./AddNewActivity";
import EditActivity from "./EditActivity";

const AllActivities = ({ activities }) => {
  
  return (
    <>
      <h1>Activities</h1>
<AddNewActivity/>
      {activities && activities.length > 0
        ? activities.map((activity) => {
          
            return (
              <div key={`activity holder${activity.id}`} className="Activities">
                <h2>{activity.name}</h2>
                <p>{activity.description}</p>
                <EditActivity activityId = {activity.id}/>
              </div>
            );
          })
        : null}
    </>
  );
};



export default AllActivities;
