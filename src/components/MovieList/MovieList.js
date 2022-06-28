import { Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
    return (
        <>
            {movies.map((movie) => (
                <Col key={movie.id}>
                    <MovieCard key={movie.id} movie={movie} />
                </Col>
            ))}
        </>
    );
}

export default MovieList;
