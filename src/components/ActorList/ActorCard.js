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
                <Card.Text>
                    Known for: {actor.known_for.map((x) => x.title).join(', ')}
                </Card.Text>
                <Card.Text>
                    Known for department: {actor.known_for_department}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ActorCard;
