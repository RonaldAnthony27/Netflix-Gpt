import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopular = () => {
  const dispatch = useDispatch(); //memoization
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getpopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?",
      MOVIE_OPTIONS
    );
    const jsonData = await data.json();
    

    dispatch(addPopularMovies(jsonData.results));
  };
  useEffect(() => {
    !popularMovies && getpopularMovies(); //memoization
  }, []);
};
export default usePopular;
