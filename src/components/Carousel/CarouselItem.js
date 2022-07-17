import { Card } from 'react-bootstrap';
import { StarHalf } from 'react-bootstrap-icons';

function CarouselItem({ movie }) {
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={
                    'https://image.tmdb.org/t/p/w500' + movie.backdrop_path ||
                    movie.poster_path
                }
            />
            <Card.Body className="text-center">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <span className="d-inline-block">{movie.overview}</span>
                    <span className="text-muted d-inline-block">
                        Release Date: {movie.release_date}
                    </span>
                </Card.Text>
                <span className="d-inline-block">
                    <StarHalf /> {movie.vote_average}
                </span>
            </Card.Body>
        </Card>
    );
}

export default CarouselItem;
