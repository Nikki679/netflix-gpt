import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";


const Header = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              // ...
              navigate('/browse')
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate('/')
            }
          });
       return () => unsubscribe();   
    },[])
    return (
        <div>
        <div className='absolute w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between'>
            <img className="w-40" src={LOGO} 
            alt="bgLogo"
            />
            {user &&  (  
                <div>
            <img className="w-10 mx-2" src={user.photoURL} alt="userIcon" />
            <button onClick={handleSignOut} className="font-bold mr-8 text-white">
            (Sign Out)
          </button> 
            </div>  
       )          
    }
        </div>
       
        </div>
    )
}

export default Header;