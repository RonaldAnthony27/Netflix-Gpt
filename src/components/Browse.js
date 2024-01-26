import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import usePopular from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";
import useTrendingMovies from "../CustomHooks/useTrendingMovies";
import FirstContainer from "./FirstContainer";
import Header from "./Header"
import SecondContainer from "./SecondContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

//rafce React arrow function component export (shortcut)
const Browse = () => {
   const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
   useNowPlayingMovies()
   useTrendingMovies()
   usePopular()
   useTopRatedMovies()
   useUpcomingMovies()
   return (
      
      <div>
         <Header />
         {/* using react fragments as we can only put one component at a time in jsx.
         Below we r making toggle feature for gpt search by extracting the value of showGptSearch from the store
         if true show gpt search component if not show The first two containers */}
         {showGptSearch ?( <GptSearch />) :
           ( <>
               <FirstContainer />
               <SecondContainer />

            </>)}
         
         

      </div>
    
   )
}
export default Browse;