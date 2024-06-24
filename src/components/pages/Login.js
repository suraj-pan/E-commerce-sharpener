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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
    <div className="flex flex-col items-center bg-white p-8 rounded-md shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
      <form className="w-full flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ref={emailInputRef}
            placeholder="Enter your email..."
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ref={passwordInputRef}
            placeholder="Enter your password..."
            required
          />
        </div>
        {!isLoading && (
          <button className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
            Login
          </button>
        )}
        {isLoading && <h3 className="text-center">Sending Request...</h3>}
      </form>
      <h4 className="mt-4 text-gray-700">Don't have an account?</h4>
      <button
        className="w-full p-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        onClick={() => navigate('/signUp')}
      >
        Create a New Account
      </button>
    </div>
  </div>
)
}

export default Login
