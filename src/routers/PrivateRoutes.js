import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({ children, isLogged }) => {

    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', pathname + search);


    return isLogged
    ? children
    : <Navigate to="/login" />
}

export default PrivateRoutes
