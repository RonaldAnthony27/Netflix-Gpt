import { MOVIE_POSTER } from "../utils/constants";
const MovieCard = ({posterPath}) => {
    return (
        <div className="  w-48  "  >
            <img  alt="Movie Poster" className="rounded-md object-cover m-1 p-1"  src={MOVIE_POSTER+posterPath} />
        </div>
    )
}
export default MovieCard;