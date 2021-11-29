import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({ children, isLogged, lastPath }) => {


    return isLogged
    ? <Navigate to={lastPath} />
    : children
}

export default PublicRoutes
