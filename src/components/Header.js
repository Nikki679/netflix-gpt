import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useRef } from "react";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const lang = useRef(null)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleChangeLanguage =() =>{
   const language =  lang.current.value
   dispatch(changeLanguage(language))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  return (
    <div>
      <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between">
        <img className="w-40" src={LOGO} alt="bgLogo" />
        {user && (
          <div className="flex">
            {showGptSearch && (
                 <select className="p-2 m-2 rounded-md bg-gray-500 text-white" onChange={handleChangeLanguage} ref={lang}>
                 {SUPPORTED_LANGUAGES.map((lang) => <option value={lang.identifier}>{lang.name}</option>)}                
             </select>
            )}
           
            <button className="bg-purple-800 p-2 m-2 text-white rounded-md" onClick={handleGptSearchClick}>
              {showGptSearch ? 'Homepage' : 'GPT Search'}
            </button>
            <img className="w-10 m-2" src={user.photoURL} alt="userIcon" />
            <button
              onClick={handleSignOut}
              className="font-bold mr-8 text-white"
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
