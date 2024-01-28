//rafce React arrow function component export (shortcut)
import { useRef, useState } from "react";
import Header from "./Header";
import isValid from "../utils/SignInValidation";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BKG_IMG } from "../utils/constants";
import{USER_ICON} from "../utils/constants"







const Login = () => {
    const dispatch= useDispatch()
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const toggleSignIn=()=> {
        setIsSignIn(!isSignIn);
    }
    const handleClick = () => {
        const msg = isValid(email.current.value, password.current.value);
        setErrorMsg(msg)
        if (msg) {
            return; // if error return the user rom logging in
        
        }
        // SignUp Logic
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                      
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_ICON
                      }).then(() => {
                          // Profile updated!
                          const {uid,email,displayName,photoURL} = auth.currentUser;
                          dispatch(addUser({
                            uid:uid,email:email,displayName:displayName, photoURL: photoURL,
                          }))
                        //  navigate("/Browse") 
                        // ...
                      }).catch((error) => {
                          // An error occurred
                          setErrorMsg(error.message)
                        // ...
                      });
                    console.log(user);
                    
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                    setErrorMsg(errorCode+"-"+errorMessage)
                    });

            
                           
                
        }
        // Sign In Logic
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user)
                        
                       // navigate("/Browse")
                        
                        
                     // ...
                    })
                .catch((error) => {
                 const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode+"-"+errorMessage)
                 });
            
          
                
                
            // ...
        }
        
    } 
    
   
    return (<div >
        <Header/> 
        <div className="absolute ">
            <img className="h-screen md:h-auto object-cover" src={BKG_IMG} alt="bg-img" />
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}
            className="absolute my-36 mx-auto left-0 right-0 bg-black w-full md:w-3/12 p-12 text-white rounded-lg bg-opacity-80">
            <span className=" relative bottom-4 p-2 my-2  text-3xl font-bold">{ isSignIn?"Sign In":"Sign Up"}</span>  
            {!isSignIn && (<  input
                ref={name}
                    type="text"
                    placeholder=" Enter FullName"
                    className="p-4 my-4 w-full rounded-lg bg-gray-700"
                />) } 
            <input
                ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full rounded-lg bg-gray-700"
                />
            <input
                ref={password}
                    type="text "
                    placeholder="Password"
                    className="p-4 my-4 w-full rounded-lg bg-gray-700"
            />
            <p className="p-2 my-2 text-red-600 font-bold text-1xl">{ errorMsg}</p>
            <button className="p-4 my-6 rounded-lg text-white bg-red-700 w-full"  onClick={handleClick}      >{isSignIn?"Sign In":"Sign Up"}</button>
            <p className="p-4 my-1 cursor-pointer" onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign up Now":"Already registered? Sign in Now"} </p>
            </form>
      
   </div>) 
}
    export default Login;