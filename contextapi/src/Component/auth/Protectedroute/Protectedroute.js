import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from '../../../Context/authContext';
function Protectedroute() {
    const auth = useAuth();
    localStorage.getItem("name").length > 0 ? auth.setisLoggedIn(true) : auth.setisLoggedIn(false);
    // console.log(isLoggedIn);
    return auth.isLoggedIn || localStorage.getItem("name").length > 0 ? <Outlet /> : <Navigate to="/" />;
}
export default Protectedroute