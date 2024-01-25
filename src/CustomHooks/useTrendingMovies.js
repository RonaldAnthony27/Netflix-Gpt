import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants"
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch=useDispatch()
    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=61147bb69eb98551b74c8e055d36fb89', MOVIE_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTrendingMovies(jsonData.results))
        
    }
    useEffect(() => {
      getTrendingMovies()  
    },[])
}
export default useTrendingMovies