import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLaguage } from "../utils/configSlice";
const Header = () => { 
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    
    const handleClick=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
           // navigate("/")
          }).catch((error) => {
              // An error happened.
             navigate("/error")
          });
    }
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }
    const handleLangChange=(e)=>{
       console.log(dispatch(changeLaguage(e.target.value)))
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
        <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0 " src={LOGO}
                alt="logo" />
            {user && (<div className="flex justify-between">
                {showGptSearch && <select className="p-2 m-2 text-white bg-gray-900 h-10 rounded-md" onChange={handleLangChange}>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    ))}
                </select>}
                <button className="sm:h-10 p-2 m-2 text-white bg-purple-600 rounded-md " onClick={handleGptSearch}>
                    { showGptSearch?"Home":"GPT Search"}</button>
                 <img className="h-10 rounded-md hidden md:block" src={user?.photoURL} alt="userLogo"/> 
                <button className="h-10 p-2 m-2 text-white bg-red-700 rounded-md" onClick={handleClick} >Sign out</button>
         </div>)}
        </div>
    )
}
export default Header;