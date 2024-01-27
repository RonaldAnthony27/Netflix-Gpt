import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies); //memoization
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?",
      MOVIE_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies(); //memoization
  }, []);
};
export default useUpcomingMovies;
