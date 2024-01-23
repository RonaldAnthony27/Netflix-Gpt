import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import FirstContainer from "./FirstContainer";
import Header from "./Header"
import SecondContainer from "./SecondContainer";

//rafce React arrow function component export (shortcut)
const Browse = () => {
   useNowPlayingMovies()
   return (
      
      <div>
         <Header />  
         <FirstContainer/>
         <SecondContainer/>

      </div>
    
   )
}
export default Browse;