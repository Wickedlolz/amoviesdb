import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NotificationContext } from '../../contexts/Notification';

import * as movieService from '../../services/data';

import { Row } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [moviesCount, setMoviesCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const { addNotification } = useContext(NotificationContext);
    const search = searchParams.get('search');
    const page = Number(searchParams.get('page')) || 1;

    useEffect(() => {
        movieService
            .getAll(search, page)
            .then(([movies, moviesCount]) => {
                setIsLoading(false);
                setMovies(movies);
                setMoviesCount(moviesCount);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [search, page, addNotification]);

    const movieList =
        movies.length > 0 ? (
            <Row xs={1} md={4} className="g-3">
                <MovieList movies={movies} />
            </Row>
        ) : (
            <h3 className="p-5 text-center">No movies in database.</h3>
        );

    return (
        <>
            {isLoading ? <LoadingSpinner /> : movieList}
            <Pagination moviesCount={moviesCount} page={page} />
        </>
    );
}

export default Catalog;
