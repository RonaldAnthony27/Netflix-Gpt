import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useSelector } from "react-redux";
const Header = () => { 
    const navigate = useNavigate()
    const user=useSelector(store=>store.user)
    const handleClick=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
              // An error happened.
              //buid an error page navigate("/error")
          });
    }
  

    return (
        <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo" />
            {user&&(<div className="flex justify-between">
                 <img className="rounded-md" src={user?.photoURL} alt="userLogo"/> 
                <button className="p-2 m-2 text-white bg-red-700 rounded-md" onClick={handleClick} >Sign out</button>
         </div>)}
        </div>
    )
}
export default Header;