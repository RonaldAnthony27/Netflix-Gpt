import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LOGO, MOVIE_OPTIONS } from "../utils/constants";
import MovieList from "./MovieList";
const PlayVideo = () => {
  const movies = useSelector((store) => store.movies);
  const { movieId } = useParams();
  const [movieVideo, setMovieVideo] = useState(null);
  const [movieTitle, setMovieTitle] = useState(null);
  const [movieOverView, setMovieOverView] = useState(null);
  const title = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      MOVIE_OPTIONS
    );
    const jsonData = await data.json();
    setMovieTitle(jsonData?.original_title);
    setMovieOverView(jsonData?.overview);
  };
  const video = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      MOVIE_OPTIONS
    );
    const jsondata = await data.json();
    const filterVideodata = jsondata?.results?.filter(
      (video) =>
        video.type === "Trailer" ||
        video.type === "Official Trailer" ||
        video.type === "Teaser" ||
        video.type === "Featurette" ||
        video.type.toLowerCase().includes("trailer")
    );
    //console.log(jsondata)
    filterVideodata?.length
      ? setMovieVideo(filterVideodata[0])
      : setMovieVideo(jsondata?.results[0]);
  };
  useEffect(() => {
    video();
    title();
  }, []);
  return (
    <div className="bg-black">
      <Link to="/">
        {" "}
        <img
          className="absolute z-20 w-44 cursor-pointer"
          src={LOGO}
          alt="logo"
        />{" "}
      </Link>
      <div className="w-screen bg-black -mt-24 absolute aspect-video">
        <iframe
          className="w-screen md:aspect-video aspect-square  "
          src={
            "https://www.youtube.com/embed/" +
            movieVideo?.key +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
        <div className="text-white md:text-4xl text-2xl bg-black p-4 pt-5  h-full md:h-auto">
          {movieTitle}
          <div className="md:text-xl text-lg md:w-1/2 mt-4">
            {movieOverView}
          </div>
        </div>
        <div className="bg-black">
          <MovieList title={"Recommended for you"} movies={movies.nowPlayingMovies} /> 
        </div>
      </div>
    </div>
  );
};
export default PlayVideo;
