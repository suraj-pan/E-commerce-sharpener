import React, { useContext, useRef } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    const authCtx = useContext(AuthContext)
    const password = useRef();
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(authCtx.token, password.current.value)
        /// fetch data to change password
        const changedata = async (token,password) => {
            try {

            const response = await  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDqssr-XYkQE5aR15B7bVhhygLUnqGrHbc', {
                    method: 'POST',
                    body: JSON.stringify({
                        idToken: token,
                        password: password,
                        returnSecureToken: true
                    }),
                    headers: {
                        'content-type': "application/json"
                    }
                })
                if (response.ok) {
                    alert("password changed successfully")
                    navigate("/store")
                } else {
                    const data = await response.json()
                    console.log(data);
                }
            } catch (error) {
                console.error("Error", error)
            }
        }

        changedata(authCtx.token,password.current.value)


    }
    return (
        <div className='flex flex-col justify-center items-center h-[70vh] bg-slate-400' >
            <h2 className='text-2xl font-bold text-center mb-4'>Change Password</h2>
            <form onSubmit={submitHandler} className='flex flex-col gap-3' >
                <label className='flex gap-3  text-lg font-bold' >Change Password
                    <input type='password' className='px-2 py-2 rounded-md' ref={password} placeholder='Enter the new password' />
                </label>
                <button className='h-[30px] w-[300px] bg-black text-white rounded-md '>submit</button>
            </form>
        </div>
    )
}

export default ChangePassword
