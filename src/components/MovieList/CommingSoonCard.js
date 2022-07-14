import { Card } from 'react-bootstrap';
import { StarHalf } from 'react-bootstrap-icons';
import './MovieCard.css';

function CommingSoonCard({ movie }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body className="text-center">
                <Card.Title>{movie.fullTitle}</Card.Title>
                <Card.Text>
                    <span className="d-inline-block">
                        Stars: {printStars(movie.starList)}
                    </span>
                    <span className="d-inline-block">
                        Genre: {movie.genreList.map((l) => l.key).join(', ')}
                    </span>
                    <span className="text-muted d-inline-block">
                        Release Date: {movie.releaseState}
                    </span>
                </Card.Text>
                <span className="d-inline-block">
                    {' '}
                    IMDB Rating: <StarHalf /> {movie.imDbRating}
                </span>
            </Card.Body>
        </Card>
    );
}

function printStars(stars) {
    return stars.map((s) => s.name).join(', ');
}

export default CommingSoonCard;
