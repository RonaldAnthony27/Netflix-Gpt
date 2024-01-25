import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopular = () => {
    const dispatch=useDispatch()
    const getpopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=61147bb69eb98551b74c8e055d36fb89', MOVIE_OPTIONS);
    const jsonData = await data.json()
    console.log(jsonData)
    
        dispatch(addPopularMovies(jsonData.results))
    }
    useEffect(() => {
        getpopularMovies(); 
    },[])
    
}
export default usePopular;