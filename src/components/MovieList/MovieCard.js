import { Card, Button } from 'react-bootstrap';

function MovieCard({ movie }) {
    return (
        <Card style={{ width: '18rem' }}>
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
