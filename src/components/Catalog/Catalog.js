import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as movieService from '../../services/data';

import { Row } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() => {
        movieService.getAll(search).then((movies) => {
            setIsLoading(false);
            setMovies(movies);
        });
    }, [search]);

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
            <Pagination />
        </>
    );
}

export default Catalog;
