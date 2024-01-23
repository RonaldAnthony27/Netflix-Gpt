import { MOVIE_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"


const useNowPlayingMovies = () =>
{
    const dispatch = useDispatch()
   const getFavMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=61147bb69eb98551b74c8e055d36fb89', MOVIE_OPTIONS)
      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results))
   }
   useEffect(() => {
      getFavMovies()
   }, [])
}
export default useNowPlayingMovies;