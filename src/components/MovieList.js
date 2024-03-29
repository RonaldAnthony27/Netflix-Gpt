import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    // console.log(movies.map(movie=>movie.poster_path))
   
    return (
        <div className="px-6 ">
            <h1 className="py-4 text-lg md:text-2xl text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar ">
                
                <div className="flex ">
                    {movies?.map
                        ((movie) =>
                            (<MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
                            ))}
              </div>  
              </div>  
              
                
            </div>
        
    )
}
export default MovieList;