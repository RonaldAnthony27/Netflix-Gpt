import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptSuggestions = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;
    return (
        <div className="p-4 m-4 bg-black text-white opacity-90">
            <div>
                {movieNames.map((movieName, index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))}
            </div>
            
        </div>
    )
}
export default GptSuggestions;