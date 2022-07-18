import { useState, useEffect, useContext } from 'react';
import { NotificationContext } from '../../contexts/Notification';

import * as movieService from '../../services/data';
import * as tmdbService from '../../services/tmdb-api';

import LoadingSpinner from '../Common/LoadingSpinner';
import MovieCard from '../MovieList/MovieCard';
import { Row, Col } from 'react-bootstrap';
import CarouselList from '../Carousel/CarouselList';

function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        movieService
            .getMostLiked()
            .then((movies) => {
                setMovies(movies);
                setIsLoading(false);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [addNotification]);

    const movieList =
        movies.length > 0 ? (
            <Row xs={1} md={4} className="g-3">
                {movies.map((movie) => (
                    <Col key={movie._id}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        ) : (
            <h3 className="p-5 text-center">{movies.errorMessage}</h3>
        );

    return (
        <>
            <div className="p-5 text-center bg-light">
                <h1 className="mb-3">Welcome to AMoviesDB</h1>
                <h4 className="mb-3">
                    Here you can find all newest and most popular movies.
                </h4>
                <p>Fell free to join and add your best movies.</p>
            </div>
            <h2 className="text-center p-2">Most liked movies</h2>
            {isLoading ? <LoadingSpinner /> : movieList}
            <h2 className="text-center p-3">Upcoming Movies</h2>
            <CarouselList fetchUrl={tmdbService.endpoints.UPCOMING} />
            <h2 className="text-center p-3">Popular Movies</h2>
            <CarouselList fetchUrl={tmdbService.endpoints.POPULAR} />
            <h2 className="text-center p-3">Top Rated Movies</h2>
            <CarouselList fetchUrl={tmdbService.endpoints.TOP_RATED} />
            <h2 className="text-center p-3">Now Playing Movies</h2>
            <CarouselList fetchUrl={tmdbService.endpoints.NOW_PLAYING} />
        </>
    );
}

export default Home;
