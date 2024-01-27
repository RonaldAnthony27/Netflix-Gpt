import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useBgVideo = (videoId) => {
  const dispatch = useDispatch();
  const TrailerVideo = useSelector((store) => store.movies.TrailerVideo); //memoization
  const getVideoBackground = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId.videoId +
        "/videos?",
      MOVIE_OPTIONS
    );
    const jsondata = await data.json();

    const filtertrailerdata = jsondata.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filtertrailerdata.length
      ? filtertrailerdata[0]
      : jsondata.results[0];

    dispatch(addTrailerVideo(trailer)); // using Redux to make the trailer bg video dynamic. Second way could be by using state variables
  };
  useEffect(() => {
    !TrailerVideo && getVideoBackground(); //memoization
  }, []);
};
export default useBgVideo;
