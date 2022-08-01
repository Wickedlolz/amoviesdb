import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NotificationContext } from '../../contexts/Notification';
import { useAuthContext } from '../../contexts/Auth';

import * as movieService from '../../services/data';

import LoadingSpinner from '../Common/LoadingSpinner';
import MovieList from '../MovieList/MovieList';
import { Row } from 'react-bootstrap';

function MyMovies() {
    const { userId } = useParams();
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        movieService
            .getMyMovies(userId)
            .then((movies) => {
                if (userId !== user?.id) {
                    return navigate('/', { replace: true });
                }

                setMovies(movies);
                setIsLoading(false);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [userId, addNotification, navigate, user]);

    const myMovieList =
        movies.length > 0 ? (
            <Row xs={1} md={4} className="g-3">
                <MovieList movies={movies} />
            </Row>
        ) : (
            <h3 className="p-5 text-center">You have 0 created movies.</h3>
        );

    return (
        <>
            <h1 className="p-5 text-center">My Movies</h1>
            {isLoading ? <LoadingSpinner /> : myMovieList}
        </>
    );
}

export default MyMovies;
