import { useState } from "react"
import Header from "../components/Header"
import MovieContainer from "../components/MovieContainer"
import { useGetMoviesQuery, useSearchMoviesQuery } from "../redux/movie/movieApiSlice"
const HomePage = () => {
    const [search, setSearch] = useState("")
    const { data: unfilteredData, isFetching: unfilteredFetch, isSuccess: unfilteredSuccess } = useGetMoviesQuery()
    const { data: filteredData, isFetching: filteredFetch, isSuccess: filteredSuccess } = useSearchMoviesQuery({ title: search }, { skip: search === "" || search === undefined ? true : false })

    const movies = search === "" || search === undefined ? unfilteredData : filteredData
    const isFetching = search === "" || search === undefined ? unfilteredFetch : filteredFetch
    const isSuccess = search === "" || search === undefined ? unfilteredSuccess : filteredSuccess
    
    return (
        <main>
            <Header />
            <section className="lg:pl-[77px] h-[257px] md:h-[550px] w-screen bg-black 
            bg-landing bg-no-repeat bg-cover
            flex justify-center items-center lg:justify-between text-white">
                <div className="md:max-h-[282px] md:max-w-[490px] max-w-[273px] max-h-[72px]">
                    <h1 className="text-mobile md:text-large text-center lg:text-left">Watch Something Incredible.</h1>
                </div>
            </section>
            <section className=" w-screen mt-[56px] md:mt-[63px]">
                <div className="pl-[28px] pr-[27px] md:pl-[77px] md:pr-[57px]">
                    <span className="text-search-mobile md:text-search-large mb-1">Search</span>
                    <input
                        type="text"
                        className=" w-full border border-black h-[34px] md:h-[54px] px-4"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </section>
            <section className="pl-[28px] overflow-x-hidden md:pl-[77px] md:mt-[48px] mt-[33px] mb-10">
                {isFetching || !isSuccess ? <div className="bg-white">
                    <div
                        className="flex h-[50vh] items-center flex-col justify-center"
                    >
                        <span className="text-gray-500 text-2xl mt-4">Loading...</span>
                    </div>
                </div> : movies && <MovieContainer movies={movies} />}
            </section>
        </main>
    )
}

export default HomePage