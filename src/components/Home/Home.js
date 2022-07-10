import { useState, useEffect } from 'react';

import * as imdbService from '../../services/imdb-api';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Pagination from '../Pagination/Pagination';
import CommingSoonCard from '../MovieList/CommingSoonCard';
import { Row, Col } from 'react-bootstrap';

function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        imdbService.getAll().then((result) => {
            console.log(result);
            setMovies(result);
            setIsLoading(false);
        });
    }, []);

    const movieList =
        movies.length > 0 ? (
            <Row xs={1} md={4} className="g-3">
                {movies.slice(0, 8).map((movie) => (
                    <Col key={movie._id}>
                        <CommingSoonCard key={movie._id} movie={movie} />
                    </Col>
                ))}
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
            </div>
            <h2 className="text-center p-2">In Theaters</h2>
            {isLoading ? <LoadingSpinner /> : movieList}
            <Pagination />
        </>
    );
}

export default Home;
