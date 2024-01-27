import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movies.trendingMovies); //memoization
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?",
      MOVIE_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTrendingMovies(jsonData.results));
  };
  useEffect(() => {
    !trendingMovies && getTrendingMovies(); //memoization
  }, []);
};
export default useTrendingMovies;
