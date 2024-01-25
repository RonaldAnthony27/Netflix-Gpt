import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=61147bb69eb98551b74c8e055d36fb89', MOVIE_OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results))

    }
    useEffect(() => {
        getUpcomingMovies()
    },[])
}
export default useUpcomingMovies;