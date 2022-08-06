import React, { useState } from "react";
import { Route, Routes } from 
"react-router-dom";
import {getPublicRoutines} from "../api"

const MyRoutines= ({myRoutines}) =>{
    const routines = myRoutines
    
    return (
        <>
          <h1>My Routines</h1>
          
   
          {routines && routines.length > 0 && (routines.isPublic = true)
            ? routines.map((routine) => {
              
                return (
                  <div key={`my routine holder${routine.id}`} className="Routines">
                    <h2>Routine: {routine.name}</h2>
                    <p>Goal: {routine.goal}</p>
                    <p>Creator: {routine.creatorName}</p>
                    
                    {routine.activities && routine.activities.length > 0 ? 
                    routine.activities.map((activity)=>{
                      return<>
                          
                       <p>Activity: {activity.name}</p>
                       <p>Description: {activity.description}</p>
                       <p>Count: {activity.count}</p>
                       <p>Duration: {activity.duration}</p>
                      </>
                    }) : null}
                  
                  </div>
                );
              })
            : null}
            
        </>
      );


}

export default MyRoutines