import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from"../utils/constants"

import { useSelector } from "react-redux";
const Header = () => { 
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const user=useSelector(store=>store.user)
    const handleClick=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
           // navigate("/")
          }).catch((error) => {
              // An error happened.
              //buid an error page navigate("/error")
          });
    }
    //all the routing(navigating to diff pages) for the app is done while auth state change of the app with the below code.
    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          //if user Signs in/Signs Out
          if (user) {
            const { uid, email, displayName,photoURL } = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            
          navigate("/Browse")
          } else {
            // User is signed out
              dispatch(removeUser());
              navigate("/")
           
          }
        });
        return () => unsubscribe();
        },[])
  

    return (
        <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40" src={LOGO}
                alt="logo" />
            {user&&(<div className="flex justify-between">
                 <img className="rounded-md" src={user?.photoURL} alt="userLogo"/> 
                <button className="p-2 m-2 text-white bg-red-700 rounded-md" onClick={handleClick} >Sign out</button>
         </div>)}
        </div>
    )
}
export default Header;