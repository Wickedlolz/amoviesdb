import { Card } from 'react-bootstrap';

function ActorCard({ actor }) {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            />
            <Card.Body>
                <Card.Title>{actor.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ActorCard;
