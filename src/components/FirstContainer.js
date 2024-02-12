import { useSelector } from "react-redux";
import  VideoTitle  from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import Shimmer from "./Shimmer";


const FirstContainer = () => {
   
        
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null) return<Shimmer/>; //early return if movies value is null.
    const mainMovie = movies[0];
    const {original_title,overview,id}=mainMovie
    return (
    
        
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview}  />
            <VideoBackground videoId={id} />
            
        </div>
    )

}
export default FirstContainer;