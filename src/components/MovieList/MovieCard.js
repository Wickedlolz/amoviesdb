import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { HeartFill, ChatSquareDotsFill } from 'react-bootstrap-icons';
import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.imageUrl} />
            <Card.Body className="text-center">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="">
                    <span className="px-2">
                        <HeartFill /> {movie.likes.length}
                    </span>
                    <span className="px-2">
                        <ChatSquareDotsFill /> {movie.comments.length}
                    </span>
                </Card.Text>
                <Link
                    to={'/movie/' + movie._id}
                    className="btn btn-outline-primary"
                >
                    Details
                </Link>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
