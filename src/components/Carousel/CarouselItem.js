import { useState, useContext } from 'react';
import { getById } from '../../services/tmdb-api';
import { NotificationContext } from '../../contexts/Notification';
import DetailsModal from '../DetailsModal/DetailsModal';

import styles from './CarouselItem.module.css';

function CarouselItem({ movie }) {
    const [currentMovie, setCurrentMovie] = useState({});
    const [movieVideos, setMovieVideos] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const { addNotification } = useContext(NotificationContext);

    const onReveal = () => {
        getById(movie.id)
            .then(([movieResult, movieVideos]) => {
                setCurrentMovie(movieResult);
                setMovieVideos(movieVideos.results);
                setIsLoading(false);
                setShow(true);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    };

    const onModalCloseClick = () => setShow(false);

    return (
        <>
            <DetailsModal
                show={show}
                onModalCloseClick={onModalCloseClick}
                movie={currentMovie}
                isLoading={isLoading}
                videos={movieVideos}
            />
            <div className="card bg-white text-white p-1" onClick={onReveal}>
                <img
                    src={
                        'https://image.tmdb.org/t/p/w500' +
                            movie.backdrop_path || movie.poster_path
                    }
                    className="card-img"
                    alt="movie poster"
                />
                <div className={`card-img-overlay ${styles['overlay-card']}`}>
                    <h5 className="card-title text-white text-center">
                        {movie.title}
                    </h5>
                </div>
            </div>
        </>
    );
}

export default CarouselItem;
