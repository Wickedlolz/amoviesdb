import { useState, useContext } from 'react';
import { getById } from '../../services/tmdb-api';
import { NotificationContext } from '../../contexts/Notification';
import DetailsModal from '../DetailsModal/DetailsModal';

import styles from './CarouselItem.module.css';

function CarouselItem({ movie }) {
    const [currentMovie, setCurrentMovie] = useState({});
    const [movieVideo, setMovieVideo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const { addNotification } = useContext(NotificationContext);

    const onReveal = () => {
        getById(movie.id)
            .then(([movieResult, movieVideos]) => {
                const index = movieVideos.results.findIndex(
                    (element) => element.type === 'Trailer'
                );
                setCurrentMovie(movieResult);
                setMovieVideo(movieVideos.results[index]);
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
                video={movieVideo}
            />
            <div className="card bg-white text-white" onClick={onReveal}>
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
