import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  ); // For memoization, to check wether it is empty then only make an api call in the useeffect

  const dispatch = useDispatch();
  const getFavMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?",
      MOVIE_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getFavMovies(); // if nowPlaying movies is empty then only make an Api call
  }, []);
};
export default useNowPlayingMovies;
