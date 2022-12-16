const MovieCard = ({ data }) => {
    return (
        <div style={{ backgroundImage: `url('${data.Poster}')` }} className="min-h-[200px] brightness-50 min-w-[200px] bg-cover rounded-[12px] md:min-h-[300px] md:min-w-[300px] max-h-[200px] max-w-[200px] md:max-h-[300px] md:max-w-[300px] text-white flex justify-center items-center">
            <h2 className="text-white text-center">{data.Title}</h2>
        </div>
    )
}

export default MovieCard