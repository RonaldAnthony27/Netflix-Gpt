import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import Shimmer from "./Shimmer";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  
  const tmdbSearchResult = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?&query=" + movie,
      MOVIE_OPTIONS
    );
    const jsondata = await data.json();
    return jsondata.results;
  };

  const handleGptSearchClick = async () => {
  
    
    //giving the context of query to Openai in order to get desired format result
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example given ahead. Example; 3idiots, Drishiyam, Pushpa, KGF, Vikram";

    //make an API call to GPT API and get Movie Results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults.choices?.[0]?.message?.content)
    const gptMovieNames = gptResults.choices?.[0]?.message?.content.split(","); //through split we are converting the result in an Array.
    const tmdbPromiseArray = gptMovieNames.map((movie) =>
      tmdbSearchResult(movie)
    );
    const tmdbFinalresult = await Promise.all(tmdbPromiseArray);
    // console.log(tmdbFinalresult)
    dispatch(
      addGptMovies({ movieNames: gptMovieNames, movieResults: tmdbFinalresult })
    );
    if (!gptResults.choices) {
      //take to error page
      <h1>
        Sorry, i didnt understand your Query, could you plzz rephrase it.
      </h1>;
    }
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      
      </form>
    </div>
  );
};
export default GptSearchBar;
