import { useState } from "react";
import { MOVIE_POSTER } from "../utils/constants";
import PlayVideo from "./PlayVideo";
const MovieCard = ({ posterPath }) => {
    const [showModal, setShowModal] = useState(false);
    
    if (!posterPath) return null;
    const handleclick = () => {
        setShowModal(!showModal);
        
    }
    return (
        
        <div className="  w-48  "  >
            <img alt="Movie Poster"
                className="rounded-md object-cover m-1 p-1 cursor-pointer transform transition duration-500 hover:scale-110"
                onClick={handleclick} src={MOVIE_POSTER + posterPath} />
            {showModal&&<PlayVideo/>}
        </div>
    )
}
export default MovieCard;