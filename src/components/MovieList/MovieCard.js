import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { StarHalf } from 'react-bootstrap-icons';
import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.imageUrl} />
            <Card.Body className="text-center">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <StarHalf /> {movie.likes.length}
                </Card.Text>
                <Link to={'/movie/' + movie._id} className="btn btn-primary">
                    Details
                </Link>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
