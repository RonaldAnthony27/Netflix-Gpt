import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import usePopular from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";
import useTrendingMovies from "../CustomHooks/useTrendingMovies";
import FirstContainer from "./FirstContainer";
import Header from "./Header"
import SecondContainer from "./SecondContainer";

//rafce React arrow function component export (shortcut)
const Browse = () => {
   useNowPlayingMovies()
   useTrendingMovies()
   usePopular()
   useTopRatedMovies()
   useUpcomingMovies()
   return (
      
      <div>
         <Header />  
         <FirstContainer/>
         <SecondContainer/>

      </div>
    
   )
}
export default Browse;