import React from "react"
import { Route, Routes, Link } from "react-router-dom";

function NavBar(){

    return (
    <div className="box">
            <Link to="/" className='link'>Home</Link>
            <Link to="/Register" className='link'>Register</Link>
            <Link to="/Login" className='link'>Login</Link>
            <Link to="/Activities" className='link'>Activities</Link>
            <Link to="/Routines" className='link'>Routines</Link>
            <Link to="/MyRoutines" className='link'>My Routines</Link>
            
        </div>
    )
}



export default NavBar