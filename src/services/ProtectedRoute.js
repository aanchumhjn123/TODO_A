 import React from 'react'
 import { Outlet , useNavigate } from 'react-router-dom'
 const ProtectedRoute = () => {
    const Navigate = useNavigate();
    const auth = localStorage.getItem("loggedin")
   return  auth? <Outlet/>:<Navigate to={"/login"} />
 }
 
 export default ProtectedRoute