import { MOVIE_POSTER } from "../utils/constants";
import { Link } from "react-router-dom";


const MovieCard = ({ posterPath, movie }) => {
    const { id } = movie
    
   
    
    if (!posterPath) return null;
  
   
    return (
        
        <div className=" w-36 md:w-48 pr-4 "  >
           <Link to={"/browse/" + id}> <img
               alt="Movie Poster"
                className="rounded-md object-cover m-1 p-1 cursor-pointer transform transition duration-500 hover:scale-110"
                src={MOVIE_POSTER + posterPath} /></Link> 
            
            
        </div>
    )
}
export default MovieCard;