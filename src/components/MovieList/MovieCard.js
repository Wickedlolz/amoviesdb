import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { HandThumbsUp, StarHalf } from 'react-bootstrap-icons';
import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <Card>
            <Card.Img variant="top" src={movie.imageUrl} />
            <Card.Body>
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
