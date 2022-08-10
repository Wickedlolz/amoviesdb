import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import styles from './ActorCard.module.css';

function ActorCard({ actor }) {
    const navigate = useNavigate();

    const showActor = () => {
        navigate('/person/' + actor.id);
    };

    return (
        <Card
            className={styles['card-image']}
            style={{ cursor: 'pointer' }}
            onClick={showActor}
        >
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
