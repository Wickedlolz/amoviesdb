import { Card } from 'react-bootstrap';
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
                    Release Date: {movie.releaseState}
                </Card.Text>
                <button className="btn btn-primary">
                    IMDB Rating: {movie.imDbRating}
                </button>
            </Card.Body>
        </Card>
    );
}

function printStars(stars) {
    return stars.map((s) => s.name).join(', ');
}

export default CommingSoonCard;
