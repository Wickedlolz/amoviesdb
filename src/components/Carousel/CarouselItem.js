function CarouselItem({ movie }) {
    return (
        <div className="card bg-dark text-white">
            <img
                src={
                    'https://image.tmdb.org/t/p/w500' + movie.backdrop_path ||
                    movie.poster_path
                }
                className="card-img"
                alt="movie poster"
            />
            <div className="card-img-overlay">
                <h5 className="card-title">{movie.title}</h5>
                {/* <p class="card-text">{movie.overview}</p>
                <p class="card-text">Last updated 3 mins ago</p> */}
            </div>
        </div>
    );
}

export default CarouselItem;
