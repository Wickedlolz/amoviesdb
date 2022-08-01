import { useState, useEffect, useContext } from 'react';
import { NotificationContext } from '../../contexts/Notification';

import * as movieService from '../../services/data';
import { endpoints } from '../../services/tmdb-api';

import MovieCard from '../MovieList/MovieCard';
import PlaceholderCard from '../Common/PlaceholderCard';
import CarouselList from '../Carousel/CarouselList';
import ActorList from '../ActorList/ActorList';

import { Row, Col } from 'react-bootstrap';

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
            <Row xs={2} md={4} className="g-3">
                {movies.map((movie) => (
                    <Col key={movie._id}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        ) : (
            <h3 className="p-5 text-center">No movies in database.</h3>
        );

    const placeholders = (
        <Row xs={2} md={4} className="g-3">
            {[1, 2, 3, 4].map((x) => (
                <Col key={x}>
                    <PlaceholderCard />
                </Col>
            ))}
        </Row>
    );

    return (
        <>
            <hr />
            <h2 className="text-center p-2">Most Liked</h2>
            {isLoading ? placeholders : movieList}
            <h2 className="text-center p-3">Upcoming</h2>
            <CarouselList fetchUrl={endpoints.UPCOMING} />
            <h2 className="text-center p-3">Popular</h2>
            <CarouselList fetchUrl={endpoints.POPULAR} />
            <h2 className="text-center p-3">Top Rated</h2>
            <CarouselList fetchUrl={endpoints.TOP_RATED} />
            <h2 className="text-center p-3">Now Playing</h2>
            <CarouselList fetchUrl={endpoints.NOW_PLAYING} />
            <h2 className="text-center p-2">Most popular actors</h2>
            <ActorList fetchUrl={endpoints.POPULAR_ACTORS} />
        </>
    );
}

export default Home;
