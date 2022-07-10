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
                    <p>Stars: {printStars(movie.starList)}</p>
                    <p>Genre: {movie.genreList.map((l) => l.key).join(', ')}</p>
                    <p className="text-muted">
                        Release Date: {movie.releaseState}
                    </p>
                </Card.Text>
                <p className="btn btn-outline-primary">
                    IMDB Rating: <StarHalf /> {movie.imDbRating}
                </p>
            </Card.Body>
        </Card>
    );
}

function printStars(stars) {
    return stars.map((s) => s.name).join(', ');
}

export default CommingSoonCard;
