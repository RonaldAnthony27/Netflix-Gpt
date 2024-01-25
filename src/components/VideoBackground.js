import {  useSelector } from "react-redux";
import useBgVideo from "../CustomHooks/useBgVideo";



const VideoBackground = (videoId) => {
   
     
    const trailerVideo = useSelector(store => store.movies?.TrailerVideo)
    useBgVideo(videoId)
    

    return (
        
        <div>
            <iframe
            className=" w-screen aspect-video"    
                src={"https://www.youtube.com/embed/QfFasuouxQI?"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&&showinfo=0&loop=1&playlist="+trailerVideo?.key}
                title="YouTube video player"
                frameborder="0"
                ></iframe>

        </div>
    )
}
export default VideoBackground;
