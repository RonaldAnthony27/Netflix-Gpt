//rafce React arrow function component export (shortcut)
import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    function toggleSignIn() {
        setIsSignIn(!isSignIn);
    }
    return (<div >
        <Header/> 
        <div className="absolute "><img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
        </div>
        
            <form className="absolute my-36 mx-auto left-0 right-0 bg-black w-3/12 p-12 text-white rounded-lg bg-opacity-80">
            <span className=" relative bottom-4 p-2 my-2  text-3xl font-bold">{ isSignIn?"Sign In":"Sign Up"}</span>  
           {!isSignIn && (<  input
                    type="text"
                    placeholder=" Enter FullName"
                    className="p-4 my-4 w-full rounded-lg bg-gray-700"
                />) } 
            <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full rounded-lg bg-gray-700"
                />
                <input
                    type="text "
                    placeholder="Password"
                    className="p-4 my-4 w-full rounded-lg bg-gray-700"
            />
            <button className="p-4 my-6 rounded-lg text-white bg-red-700 w-full">Sign In</button>
            <p className="p-4 my-1 cursor-pointer" onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign up Now":"Already registered? Sign in Now"} </p>
            </form>
      
   </div>) 
}
export default Login;