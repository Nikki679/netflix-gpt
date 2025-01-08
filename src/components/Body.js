import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser,removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { auth } from '../utils/firebase'

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([{
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    }
])


  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body