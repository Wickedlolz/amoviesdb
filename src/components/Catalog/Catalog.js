import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as movieService from '../../services/data';

import { Row } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        movieService.getAll().then((movies) => {
            setIsLoading(false);
            setMovies(movies);
        });
    }, []);

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
            <div className="p-5 text-center bg-light">
                <h1 className="mb-3">Welcome to AMoviesDB</h1>
                <h4 className="mb-3">
                    Here you can find all newest and most popular movies.
                </h4>
                <p>Fell free to join and add your best movies.</p>

                <Link to={'/create'} className="btn btn-warning">
                    Create
                </Link>
            </div>
            {isLoading ? <LoadingSpinner /> : movieList}
            <Pagination />
        </>
    );
}

export default Catalog;
