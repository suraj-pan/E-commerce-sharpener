import React, { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
    const authCtx = useContext(AuthContext);

    if(!authCtx.isLoggedIn){
        return <Navigate to="/login" />
    }
  return children
}

export default ProtectedRoute
