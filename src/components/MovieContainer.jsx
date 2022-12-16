import { useGetMoviesQuery } from "../redux/movie/movieApiSlice"
import MovieCard from "./MovieCard";

const MovieContainer = () => {
    const { isFetching, isSuccess } = useGetMoviesQuery()

    if (isFetching || !isSuccess)
        return (
            <div className="bg-white">
                <div
                    className="flex h-[50vh] items-center flex-col justify-center"
                >
                    <span className="text-gray-500 text-2xl mt-4">Loading...</span>
                </div>
            </div>
        );
    return (
        <div className="overflow-x-hidden">
            <h2 className="mb-[26px] md:mb-[18px]">All</h2>
            <div className="flex overflow-x-auto gap-x-[10px] md:gap-x-[13px] pr-[27px] md:pr-[57px]">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

        </div>
    )
}

export default MovieContainer