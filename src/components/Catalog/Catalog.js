import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import LoadingSpinner from '../Loading/Loading';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

function Catalog() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Avengers',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 2,
            title: 'Doctor Strange',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 3,
            title: 'Spider-Man No Way Home',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 4,
            title: 'Venom',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 5,
            title: 'Batman',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 6,
            title: 'League of Justice',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 7,
            title: 'Morbius',
            imageUrl: 'https://source.unsplash.com/random',
        },
        {
            id: 9,
            title: 'Iron Man',
            imageUrl: 'https://source.unsplash.com/random',
        },
    ]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <div className="p-5 text-center bg-light">
                <h1 className="mb-3">Welcome to AMoviesDB</h1>
                <h4 className="mb-3">
                    Here you can find all newest and most popular movies.
                </h4>
                <p>Fell free to join and add your best movies.</p>
            </div>
            {isLoading ? (
                <LoadingSpinner />
            ) : movies.length > 0 ? (
                <>
                    <Row xs={1} md={4} className="g-3">
                        <MovieList movies={movies} />
                    </Row>
                </>
            ) : (
                <h3 className="p-5 text-center">No movies in database.</h3>
            )}
            <Pagination />
        </>
    );
}

export default Catalog;
