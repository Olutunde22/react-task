import MovieCard from "./MovieCard";

const MovieContainer = ({ movies }) => {
    return (
        <div className="overflow-x-hidden">
            <h2 className="mb-[26px] md:mb-[18px] md:w-[279px] md:h-[31px] w-[210px] h-[23px] text-search-mobile md:text-search-large">All</h2>
            <div className="flex overflow-x-auto gap-x-[10px] md:gap-x-[13px] pr-[27px] md:pr-[57px]">
                {movies.map((movie) => <MovieCard key={movie.imdbID} data={movie} />)}
            </div>

        </div>
    )
}

export default MovieContainer