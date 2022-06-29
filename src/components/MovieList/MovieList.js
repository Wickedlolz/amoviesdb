import { Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
    return (
        <>
            {movies.map((movie) => (
                <Col key={movie._id}>
                    <MovieCard key={movie._id} movie={movie} />
                </Col>
            ))}
        </>
    );
}

export default MovieList;
