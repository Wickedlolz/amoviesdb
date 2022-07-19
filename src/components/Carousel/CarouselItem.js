import { useState } from 'react';
import { getById } from '../../services/tmdb-api';
import DetailsModal from '../DetailsModal/DetailsModal';

function CarouselItem({ movie }) {
    const [currentMovie, setCurrentMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);

    const onReveal = () => {
        getById(movie.id)
            .then((result) => {
                setCurrentMovie(result);
                setIsLoading(false);
                setShow(true);
            })
            .catch((error) => console.log(error));
    };

    const onModalCloseClick = () => setShow(false);

    return (
        <>
            <DetailsModal
                show={show}
                onModalCloseClick={onModalCloseClick}
                movie={currentMovie}
                isLoading={isLoading}
            />
            <div className="card bg-dark text-white" onClick={onReveal}>
                <img
                    src={
                        'https://image.tmdb.org/t/p/w500' +
                            movie.backdrop_path || movie.poster_path
                    }
                    className="card-img"
                    alt="movie poster"
                />
                <div className="card-img-overlay" style={{ cursor: 'pointer' }}>
                    <h5 className="card-title text-white">{movie.title}</h5>
                </div>
            </div>
        </>
    );
}

export default CarouselItem;
