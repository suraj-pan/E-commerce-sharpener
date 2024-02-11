import React, { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate()

    const logoutHandler =()=>{
        authCtx.logout()
        navigate("/login")
        
    }
  return (
    <div>
      <button onClick={logoutHandler} >Logout</button>
    </div>
  )
}

export default Logout
