import React,{createContext, useState} from 'react';

export  const AuthContext = createContext({
    token:"",
    email:"",
    isLoggedIn:false,
    login:(token,email)=>{},
    logout:()=>{}

})

export const AuthContextProvider =(props)=>{
                                                    
    const initialToken = localStorage.getItem('token')
    const initialEmail = localStorage.getItem('mail')
  
    const [token,setToken] = useState(initialToken)
    const [email,setEmail] = useState(initialEmail)
  
  
    function loginHandler(token,email){
      localStorage.setItem('token',token)
      localStorage.setItem('email',email)
      setToken(token)
      setEmail(email)
      // setAutoTimeoutTimer()
    }

    const setAutoTimeoutTimer =()=>{
      const Timer = setTimeout(()=>{
        logoutHandler()
      },30000)

      setAutoTimeoutTimer(Timer)
    }
  
    const userIsLoggedIn = !!token
  
  
    const logoutHandler = () => {
      setToken(null)
      setEmail(null)
      localStorage.removeItem('token')
      localStorage.removeItem('email')
    }


  
  
    const contextValue = {
      token:token,
      email:email,
      isLoggedIn:userIsLoggedIn,
      login:loginHandler,
      logout:logoutHandler
    }


    return (
        <AuthContext.Provider value={contextValue} >{props.children}</AuthContext.Provider>
    )
}