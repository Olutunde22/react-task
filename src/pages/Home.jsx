import Header from "../components/Header"
import MovieContainer from "../components/MovieContainer"


const HomePage = () => {
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
                    <span>Search</span>
                    <input
                        type="text"
                        className=" w-full border border-black h-[34px] md:h-[54px]"
                    />
                </div>
            </section>
            <section className="pl-[28px] overflow-x-hidden md:pl-[77px] md:mt-[48px] mt-[33px] mb-10">
                <MovieContainer />
            </section>
        </main>
    )
}

export default HomePage