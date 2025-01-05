import React from 'react'
import Header from './Header'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'

const Browse = () => {
    const navigate= useNavigate()
    const user = useSelector((state) =>state.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='flex justify-between'>
        <div><Header /></div>
       {user &&  <div className='p-4'> 
        <img className='w-10' src={user.photoURL} alt='userIcon'/>
        <button onClick={handleSignOut} className='cursor-pointer font-bold p-2'>Sign out</button>
        </div>
        }
    </div>
    
  )
}

export default Browse