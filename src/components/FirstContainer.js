import { useSelector } from "react-redux";
import  VideoTitle  from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const FirstContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null) return; //early return if movies value is null.
    const mainMovie = movies[0];
    const {original_title,overview,id}=mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground videoId={id} />
            
        </div>
    )

}
export default FirstContainer;