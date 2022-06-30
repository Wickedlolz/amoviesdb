import { Card } from 'react-bootstrap';
import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <Card>
            <Card.Img variant="top" src={movie.imageUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Rating: 0</Card.Text>
                <a className="btn btn-primary" href={movie._id}>
                    Details
                </a>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
