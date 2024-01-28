import { Link } from "lucide-react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
    const id= useSelector((store) => store.movies?.nowPlayingMovies[0]?.id)
    console.log(id)
    console.log("http://localhost:3000/Browse/"+id)
    
    return (
        <div className="pt-[15%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black  ">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="flex ">
            <Link to={"/browse/" + id}>  <button className="my-4 md:my-0 bg-white text-black md:p-4 py-1 px-3  md:px-12  rounded-md mx-2 hover:opacity-80">  Play  </button></Link> 
                <button className="hidden md:inline-block bg-slate-500 bg-opacity-50 text-white p-2 px-12 rounded-md hover:opacity-80">More info</button>
            </div>
        </div>
    )
}
export default VideoTitle;
