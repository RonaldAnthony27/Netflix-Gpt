import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies); //memoization
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?",
      MOVIE_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies(); //memoization
  }, []);
};
export default useTopRatedMovies;
