import React,{useRef,useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext';

const Login = () => {

    const navigate = useNavigate()

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true);


    const authCtx = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault()


        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        setIsLoading(true)


        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqssr-XYkQE5aR15B7bVhhygLUnqGrHbc', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'content-type': "application/json"
            }
        })
            .then((res) => {
                setIsLoading(false)
                if (res.ok) {
                    return res.json();
                 
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed';

                        throw new Error(errorMessage)
                    })
                }
            })
            .then((data) => {
                authCtx.login(data.idToken, enteredEmail)
                alert('Login successfully')
                navigate('/profile')

            })
            .catch((err) => {
                alert(err.message)
            })

    }




return (
    <div className='flex justify-center flex-col items-center  rounded-md bg-slate-500 min-h-screen' >
        <h1 className='text-white text-3xl mb-4' >Login</h1>
        <div   >
            <form className='flex flex-col gap-3 justify-center items-center' onSubmit={submitHandler}>
                <label>E-mail
                    <input type='email' className='w-[290px] ml-6 rounded-md px-3 py-1' ref={emailInputRef} placeholder='Enter the Email Here...' required />
                </label>
                <label>Password
                    <input type='password' className='w-[290px] ml-1 rounded-md px-3 py-1' ref={passwordInputRef} placeholder='Enter the password Here...' required />
                </label>
          {!isLoading &&       <button className='h-[30px] rounded-lg w-[200px] bg-black text-white'  > Login</button>}
          {isLoading && <h3>Sending Request...</h3> }
            </form>
            <h4>Don't have a account</h4>
            <button className='h-[30px] rounded-lg w-[200px] bg-black text-white mt-3' onClick={() => navigate("/signUp")}  >Create a New account</button>
        </div>
    </div>
)
}

export default Login
