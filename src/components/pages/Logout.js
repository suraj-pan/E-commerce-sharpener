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
    <div className='bg-slate-500 h-[70vh] flex justify-center items-center'>
      <button onClick={logoutHandler} className='bg-black text-white px-2 py-1 rounded rounded-md' >Logout</button>
    </div>
  )
}

export default Logout
