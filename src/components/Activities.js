import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createNewActivity} from "../api";
import AddNewActivity from "./AddNewActivity";

const AllActivities = ({ activities }) => {
  console.log(activities, " look at line 5")
  return (
    <>
      <h1>Activities</h1>
<AddNewActivity/>
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



export default AllActivities;
