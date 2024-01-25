import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch=useDispatch()
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=61147bb69eb98551b74c8e055d36fb89', MOVIE_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results))
        
    }
    useEffect(() => {
      getTopRatedMovies()  
    },[])
}
export default useTopRatedMovies