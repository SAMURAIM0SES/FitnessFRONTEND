import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getPublicRoutines } from "../api";


const PublicRoutines  = ( {routines} ) => {
    console.log(routines, " look at line 6")
    return (
      <>
        <h1>Routines</h1>
 
        {routines && routines.length > 0 && (routines.isPublic = true)
          ? routines.map((routine) => {
            console.log(routine, " look at line 13")
              return (
                <div key={`routine holder${routine.id}`} className="Routines">
                  <h2>{routine.name}</h2>
                  <p>{routine.goal}</p>
                  <p>{routine.creatorName}</p>
                  <p>{[routine.activity]}</p>
                </div>
              );
            })
          : null}
      </>
    );
  };
  


export default PublicRoutines