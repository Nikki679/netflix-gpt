import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { USER_Avatar,BACKGROUND_IMAGE } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const navigate= useNavigate();
    const dispatch = useDispatch()

    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null)
    const name = useRef(null);

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message)

    if(name.current && !(/^[a-zA-Z\s'-]{2,}$/.test(name.current.value)))
    {
        const message1 = "Name is not valid"
        setErrorMessage(message1)
    }
    if(confirmPassword.current && password.current.value !== confirmPassword.current.value)
    {
       const message2 = "password does not match"
        setErrorMessage(message2)
    }
    if(message) return;

   
    if(!isSignInForm)
    {
       //sign up logic 
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
        displayName: name.current.value, photoURL: USER_Avatar
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
      }).catch((error) => {
        // An error occurred
        // ...
      });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    // ..
  });
    }
    else {
       //sign in logic
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });
    }
    }
  return (
    <div>
        <Header />
        <div>
        <img className="absolute" src={BACKGROUND_IMAGE} 
            alt="bgLogo"
            /> 
        </div>
        <form onSubmit = {(e) => e.preventDefault()} className='bg-black w-3/12 absolute mx-auto my-36 p-12 right-0 left-0 text-white rounded bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
           {!isSignInForm && <input type="text" ref={name} placeholder="Name" className='p-2 my-4 w-full bg-gray-700'/>}
            <input type="text" ref={email} placeholder="Email Address" className='p-2 my-4 w-full bg-gray-700'/>
            <input type="password" ref={password} placeholder="Password" className='p-2 my-4 w-full bg-gray-700'/>
            {!isSignInForm && <input type="password" ref={confirmPassword} placeholder="Confirm Password" className='p-2 my-4 w-full bg-gray-700'/>}
            <p className='text-red-600'>{errorMessage}</p>
            <button className='p-4 my-4 rounded-md bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 px-2 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered. Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login