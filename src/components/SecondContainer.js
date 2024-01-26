import { useSelector } from "react-redux";
import MovieList from "./MovieList"


const SecondContainer = () => {
    
    const movies = useSelector((store) => store.movies);
        
    
    return (
         <div className="bg-black">
           <div className="-mt-60 pl-12 relative z-20 ">
             <MovieList title={"Now Playing" } movies={movies.nowPlayingMovies} />     
             <MovieList title={"Trending" } movies={movies.trendingMovies} />     
             <MovieList title={"Popular" } movies={movies.popularMovies} />     
             <MovieList title={"Top Rated" } movies={movies.topRatedMovies} />     
             <MovieList title={"Upcoming" } movies={movies.upcomingMovies} />     
         </div></div>
     )
}
export default SecondContainer;