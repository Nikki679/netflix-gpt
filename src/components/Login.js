import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header />
        <div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="bgLogo"
            /> 
        </div>
        <form className='bg-black w-3/12 absolute mx-auto my-36 p-12 right-0 left-0 text-white rounded bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
           {!isSignInForm && <input type="text" placeholder="Name" className='p-2 my-4 w-full bg-gray-700'/>}
            <input type="text" placeholder="Email Address" className='p-2 my-4 w-full bg-gray-700'/>
            <input type="password" placeholder="Password" className='p-2 my-4 w-full bg-gray-700'/>
            {!isSignInForm && <input type="password" placeholder="Confirm Password" className='p-2 my-4 w-full bg-gray-700'/>}
            <button className='p-4 my-4 rounded-md bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 px-2 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered. Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login