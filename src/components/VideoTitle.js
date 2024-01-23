

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black  ">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex">
                <button className="bg-white text-black p-4 px-12 rounded-md mx-2 hover:opacity-80">  Play  </button>
                <button className="bg-slate-500 bg-opacity-50 text-white p-2 px-12 rounded-md hover:opacity-80">More info</button>
            </div>
        </div>
    )
}
export default VideoTitle;
