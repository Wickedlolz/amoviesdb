import { Card, Button } from 'react-bootstrap';
import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <Card className="movie-card">
            <Card.Img variant="top" src={movie.imageUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Rating: 0</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
